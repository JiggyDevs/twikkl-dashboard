import * as React from "react";
import { SVGProps } from "react";
const CaretIcon = (
  props: SVGProps<SVGSVGElement> & { otherstyle?: string }
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={7}
    fill="none"
    {...props}
    className={`transition-transform duration-300 ${props.otherstyle}`}
  >
    <path
      fill="#50A040"
      d="M11.834 1.475a.833.833 0 0 1-.309.65l-5 4.025a.833.833 0 0 1-1.058 0l-5-4.166A.834.834 0 1 1 1.534.7L6 4.425l4.467-3.6a.833.833 0 0 1 1.367.65Z"
    />
  </svg>
);
export default CaretIcon;
