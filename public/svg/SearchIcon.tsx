import * as React from "react";
import { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#50A040"}
      d="m16.945 16.055-3.383-3.375a7.203 7.203 0 1 0-.882.883l3.375 3.382a.64.64 0 0 0 .89 0 .633.633 0 0 0 0-.89ZM2.125 8.063A5.938 5.938 0 1 1 8.063 14a5.946 5.946 0 0 1-5.938-5.938Z"
    />
  </svg>
);
export default SearchIcon;
