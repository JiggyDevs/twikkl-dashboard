import * as React from "react";
import { SVGProps } from "react";
const ReloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#50A040"
      d="M0 9a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.707 6.707 0 0 1 9 16C2.76 16-.36 8.46 4.05 4.05 8.46-.36 16 2.77 16 9h-3l4 4h.1L21 9h-3A9 9 0 1 0 0 9Z"
    />
  </svg>
);
export default ReloadIcon;
