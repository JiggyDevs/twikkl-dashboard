import * as React from "react";
import { SVGProps } from "react";
const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#50A040"}
      d="M-.001 1.17a1 1 0 0 0 .37.78l6 4.83a1 1 0 0 0 1.27 0l6-5a1.001 1.001 0 1 0-1.28-1.54l-5.36 4.47L1.639.39a1 1 0 0 0-1.64.78Z"
    />
  </svg>
);
export default ArrowDownIcon;
