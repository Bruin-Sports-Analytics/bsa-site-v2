import type { SVGProps } from "react";

type SportIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

function SportSvg({ size = 34, color = "currentColor", children, ...props }: SportIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      {...props}
    >
      {children}
    </svg>
  );
}

export function BaseballIcon(props: SportIconProps) {
  return (
    <SportSvg {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M17 8c4.8 7.5 4.8 24.5 0 32" />
      <path d="M31 8c-4.8 7.5-4.8 24.5 0 32" />
      <path d="M14.8 16.5l5.2 2.2M14 24l5.8.7M14.8 31.5l5.2-2.2" />
      <path d="M33.2 16.5l-5.2 2.2M34 24l-5.8.7M33.2 31.5l-5.2-2.2" />
    </SportSvg>
  );
}

export function VolleyballIcon(props: SportIconProps) {
  return (
    <SportSvg {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 6c1.8 7.5-1.5 14.6-9.7 20.9" />
      <path d="M40.4 16.8c-7.5-2.5-15.2-.2-23.1 7" />
      <path d="M37.7 34.6c-5.9-5.5-13.8-7.4-23.7-5.6" />
      <path d="M10.3 14.3c5.2.4 10 2.6 14.4 6.6" />
    </SportSvg>
  );
}

export function BasketballIcon(props: SportIconProps) {
  return (
    <SportSvg {...props}>
      <circle cx="24" cy="24" r="18" />
      <path d="M6 24h36" />
      <path d="M24 6v36" />
      <path d="M11.3 11.3c8.4 5 12.7 13.5 12.7 25.5" />
      <path d="M36.7 11.3c-8.4 5-12.7 13.5-12.7 25.5" />
    </SportSvg>
  );
}

export function FootballIcon(props: SportIconProps) {
  return (
    <SportSvg {...props}>
      <path d="M7.5 25.2c6.2-12.8 19.8-18.6 32.8-14.1 3.8 13.3-2.7 26.7-15.6 32-7.1-1.9-13.3-8-17.2-17.9Z" />
      <path d="M17.5 30.5l12.8-12.8" />
      <path d="M20.9 22.9l4.2 4.2" />
      <path d="M25.1 18.7l4.2 4.2" />
      <path d="M12 25.2c3.5 4.4 7.2 8 11 10.8" />
      <path d="M22 12.2c4.2 3.2 7.7 6.8 10.6 10.8" />
    </SportSvg>
  );
}

export function TennisIcon(props: SportIconProps) {
  return (
    <SportSvg {...props}>
      <ellipse cx="18" cy="16.5" rx="10.8" ry="14" transform="rotate(42 18 16.5)" />
      <path d="M25.4 26.7l13 13" />
      <path d="M30.2 31.5l-5.7 5.7" />
      <path d="M10.9 9.4l14.3 14.3" />
      <path d="M6.9 15.2l12.5 12.5" />
      <path d="M17.2 5.3l12.5 12.5" />
      <circle cx="37" cy="11" r="3.6" />
    </SportSvg>
  );
}
