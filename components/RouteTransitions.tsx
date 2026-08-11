"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

const FADE_MS = 240;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

function forceScrollTop() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previousScrollBehavior;
}

export function RouteTransitions({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const timeoutRef = useRef<number | null>(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setExiting(false);
  }, [pathname]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || isModifiedClick(event)) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      event.preventDefault();

      const navigate = () => {
        forceScrollTop();
        router.push(`${url.pathname}${url.search}${url.hash}`);
      };

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      if (reduceMotion.matches) {
        navigate();
        return;
      }

      setExiting(true);
      timeoutRef.current = window.setTimeout(() => {
        navigate();
        timeoutRef.current = null;
      }, FADE_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [router]);

  return (
    <div key={pathname} className={`route-transition${exiting ? " route-transition--exiting" : ""}`}>
      {children}
    </div>
  );
}
