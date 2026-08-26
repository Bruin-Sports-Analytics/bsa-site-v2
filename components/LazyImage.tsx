"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

type LazyImageProps = ImageProps & {
  rootMargin?: string;
};

export function LazyImage({ rootMargin = "300px", ...props }: LazyImageProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const { alt, ...imageProps } = props;

  useEffect(() => {
    if (shouldLoad) return;
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  return (
    <span ref={ref} style={{ display: "contents" }}>
      {shouldLoad ? <Image alt={alt} {...imageProps} /> : null}
    </span>
  );
}
