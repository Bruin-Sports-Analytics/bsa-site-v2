import type { CSSProperties, HTMLAttributes, SVGProps } from "react";

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

function MaskedSportIcon({ src, props }: { src: string; props: SportIconProps }) {
  const { size = 34, color = "currentColor", style, ...rest } = props;
  const spanProps = rest as HTMLAttributes<HTMLSpanElement>;
  const iconStyle = {
    width: size,
    height: size,
    background: color,
    WebkitMask: `url('${src}') center / contain no-repeat`,
    mask: `url('${src}') center / contain no-repeat`,
    ...style
  } as CSSProperties;

  return <span role="img" style={iconStyle} {...spanProps} />;
}

export function BaseballIcon(props: SportIconProps) {
  return <MaskedSportIcon src="/assets/team-icons/baseball.png" props={props} />;
}

export function VolleyballIcon(props: SportIconProps) {
  return <MaskedSportIcon src="/assets/team-icons/volleyball.png" props={props} />;
}

export function BasketballIcon(props: SportIconProps) {
  return <MaskedSportIcon src="/assets/team-icons/basketball.png" props={props} />;
}

export function FootballIcon(props: SportIconProps) {
  return <MaskedSportIcon src="/assets/team-icons/football.png" props={props} />;
}

export function TennisIcon(props: SportIconProps) {
  return <MaskedSportIcon src="/assets/team-icons/tennis.png" props={props} />;
}
