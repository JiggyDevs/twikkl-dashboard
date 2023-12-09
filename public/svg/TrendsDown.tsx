import * as React from "react";
import { SVGProps } from "react";
const TrendsDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#E20000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 1 5.1 5 3.4-3.333L18 11"
    />
    <path
      stroke="#E20000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 6v5h-5.1"
    />
  </svg>
);
export default TrendsDown;
