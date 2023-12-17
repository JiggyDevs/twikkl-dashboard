import * as React from "react";
import { SVGProps } from "react";
const TickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color || "#f1fcf2"}
    strokeWidth={3}
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);
export default TickIcon;
