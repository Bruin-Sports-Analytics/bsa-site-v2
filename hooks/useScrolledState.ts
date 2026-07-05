"use client";

import { useEffect, useState } from "react";

export function useScrolledState(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.createElement("span");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = `position:absolute;top:${threshold}px;left:0;width:1px;height:1px;pointer-events:none;`;
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [threshold]);

  return scrolled;
}
