import type { SVGProps } from "react";

/* Set de 18 iconos del sistema MEGU (handoff 4a): caja 24, trazo 1.5,
   extremos redondeados, siempre currentColor. En 16px el trazo baja a 1.25
   y en 20px a 1.4, sin reescalar la geometría. */

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & { size?: 16 | 18 | 20 | 24 | number };

function strokeFor(size: number) {
  if (size <= 16) return 1.25;
  if (size <= 20) return 1.4;
  return 1.5;
}

function makeIcon(name: string, body: React.ReactNode) {
  function Icon({ size = 24, strokeWidth, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth ?? strokeFor(size)}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {body}
      </svg>
    );
  }
  Icon.displayName = name;
  return Icon;
}

export const IconArrowRight = makeIcon("IconArrowRight", <path d="M4 12h16M14 6l6 6-6 6" />);
export const IconArrowNE = makeIcon("IconArrowNE", <path d="M7 17L17 7M8 7h9v9" />);
export const IconArrowLeft = makeIcon("IconArrowLeft", <path d="M20 12H4M10 6l-6 6 6 6" />);
export const IconExternal = makeIcon("IconExternal", <path d="M13 4h7v7M20 4l-9 9M18 13v6H5V6h6" />);
export const IconDownload = makeIcon("IconDownload", <path d="M12 4v11M8 11l4 4 4-4M4 20h16" />);
export const IconMail = makeIcon(
  "IconMail",
  <>
    <rect x="3" y="6" width="18" height="12" />
    <path d="M3 7l9 7 9-7" />
  </>
);
export const IconLink = makeIcon(
  "IconLink",
  <>
    <path d="M10 14a4 4 0 0 1 0-5l2-2a4 4 0 0 1 6 6l-1 1" />
    <path d="M14 10a4 4 0 0 1 0 5l-2 2a4 4 0 0 1-6-6l1-1" />
  </>
);
export const IconCode = makeIcon("IconCode", <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />);
export const IconFilter = makeIcon("IconFilter", <path d="M4 6h16M7 12h10M10 18h4" />);
export const IconGrid = makeIcon(
  "IconGrid",
  <>
    <rect x="4" y="4" width="7" height="7" />
    <rect x="13" y="4" width="7" height="7" />
    <rect x="4" y="13" width="7" height="7" />
    <rect x="13" y="13" width="7" height="7" />
  </>
);
export const IconSearch = makeIcon(
  "IconSearch",
  <>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5L20 20" />
  </>
);
export const IconMenu = makeIcon("IconMenu", <path d="M4 7h16M4 12h16M4 17h16" />);
export const IconClose = makeIcon("IconClose", <path d="M6 6l12 12M18 6L6 18" />);
export const IconPlus = makeIcon("IconPlus", <path d="M12 5v14M5 12h14" />);
export const IconCheck = makeIcon("IconCheck", <path d="M5 13l4 4L19 7" />);
export const IconAlert = makeIcon(
  "IconAlert",
  <>
    <path d="M12 4l8.5 15.5H3.5z" />
    <path d="M12 10v4M12 17h.01" />
  </>
);
export const IconClock = makeIcon(
  "IconClock",
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4.5l3 1.8" />
  </>
);
export const IconChevron = makeIcon("IconChevron", <path d="M6 10l6 6 6-6" />);
export const IconLocale = makeIcon(
  "IconLocale",
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4c2.5 2.4 2.5 13.2 0 16M12 4c-2.5 2.4-2.5 13.2 0 16" />
  </>
);
/* Fuera del set de 18: interruptor de tema, misma geometría (círculo partido). */
export const IconTheme = makeIcon(
  "IconTheme",
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 4v16" />
    <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" stroke="none" />
  </>
);
