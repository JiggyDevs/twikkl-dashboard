import * as React from "react";
import { SVGProps } from "react";
const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#041105"}
      d="M5.83 14.001a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 1 1 1.54 1.28l-4.47 5.36 4.32 5.36a1 1 0 0 1-.78 1.64Z"
    />
  </svg>
);
export default ArrowLeftIcon;
