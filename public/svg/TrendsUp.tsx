import * as React from "react";
import { SVGProps } from "react";
const TrendsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#50A040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 11 5.1-5 3.4 3.333L18 1"
    />
    <path
      stroke="#50A040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 6V1h-5.1"
    />
  </svg>
);
export default TrendsUp;
