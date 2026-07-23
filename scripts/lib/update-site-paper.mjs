import ts from "typescript";

/**
 * Mirror of `slugify` in lib/utils.ts, applied to a filename's base name.
 * Returns a lowercase, URL-safe name with a `.pdf` extension.
 */
export function slugifyFilename(filename) {
  const base = filename.replace(/\.[^.]*$/, "");
  const slug = base
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${slug}.pdf`;
}

/**
 * Find the object literals inside the `export const projects = [...]` array.
 */
function getProjectObjects(sourceFile) {
  let arrayLiteral;
  sourceFile.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const decl of node.declarationList.declarations) {
      if (ts.isIdentifier(decl.name) && decl.name.text === "projects" && decl.initializer) {
        const init = ts.isAsExpression(decl.initializer) ? decl.initializer.expression : decl.initializer;
        if (ts.isArrayLiteralExpression(init)) arrayLiteral = init;
      }
    }
  });
  if (!arrayLiteral) throw new Error("Could not find the `projects` array in data/site.ts");
  return arrayLiteral.elements.filter(ts.isObjectLiteralExpression);
}

/** Get a named property assignment from an object literal, or undefined. */
function getProp(objectLiteral, name) {
  return objectLiteral.properties.find(
    (p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name
  );
}

/** The string value of a property whose initializer is a string literal, or undefined. */
function stringPropValue(objectLiteral, name) {
  const prop = getProp(objectLiteral, name);
  if (prop && ts.isStringLiteral(prop.initializer)) return prop.initializer.text;
  return undefined;
}

/**
 * Return `source` with the `links.paper` value of the project matching `slug`
 * set to `url`. Inserts a `paper` key if `links` has none. Throws if the slug
 * is missing, ambiguous, or the project has no `links` object.
 */
export function setProjectPaper(source, slug, url) {
  const sourceFile = ts.createSourceFile("site.ts", source, ts.ScriptTarget.Latest, true);
  const projectObjects = getProjectObjects(sourceFile);

  const matches = projectObjects.filter((obj) => stringPropValue(obj, "slug") === slug);
  if (matches.length === 0) throw new Error(`Project with slug "${slug}" not found in data/site.ts`);
  if (matches.length > 1) throw new Error(`Multiple projects with slug "${slug}" found in data/site.ts`);

  const project = matches[0];
  const linksProp = getProp(project, "links");
  if (!linksProp || !ts.isObjectLiteralExpression(linksProp.initializer)) {
    throw new Error(`Project "${slug}" has no object-literal \`links\` property to update`);
  }
  const linksObj = linksProp.initializer;
  const quotedUrl = JSON.stringify(url); // double-quoted, matches file style; escapes safely

  const paperProp = getProp(linksObj, "paper");
  if (paperProp) {
    if (!ts.isStringLiteral(paperProp.initializer)) {
      throw new Error(`Project "${slug}" has a non-string \`links.paper\` value; refusing to edit`);
    }
    const start = paperProp.initializer.getStart(sourceFile);
    const end = paperProp.initializer.getEnd();
    return source.slice(0, start) + quotedUrl + source.slice(end);
  }

  // No `paper` key yet: insert one just after the `{` of the links object.
  const insertAt = linksObj.getStart(sourceFile) + 1;
  const insertion = ` paper: ${quotedUrl},`;
  return source.slice(0, insertAt) + insertion + source.slice(insertAt);
}
