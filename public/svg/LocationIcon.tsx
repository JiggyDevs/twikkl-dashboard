import * as React from "react";
import { SVGProps } from "react";
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#50A040"}
      d="M8.002 17.556c-.156 0-.313-.026-.47-.077a1.244 1.244 0 0 1-.432-.25 34.318 34.318 0 0 1-2.163-2.185 24.178 24.178 0 0 1-1.992-2.493 14.784 14.784 0 0 1-1.467-2.633c-.381-.895-.572-1.77-.572-2.622 0-2.115.689-3.86 2.066-5.234C4.35.687 6.027 0 8.002 0c1.976 0 3.652.687 5.03 2.062 1.378 1.374 2.066 3.119 2.066 5.234 0 .853-.19 1.724-.572 2.613a15.585 15.585 0 0 1-1.458 2.632c-.59.867-1.25 1.698-1.98 2.494a36.475 36.475 0 0 1-2.165 2.175 1.287 1.287 0 0 1-.434.26 1.458 1.458 0 0 1-.487.086Zm.003-8.825c.446 0 .826-.159 1.14-.476.315-.317.472-.698.472-1.143 0-.445-.158-.825-.475-1.14A1.565 1.565 0 0 0 8 5.5c-.444 0-.824.159-1.14.476a1.563 1.563 0 0 0-.472 1.143c0 .445.159.825.475 1.14.318.315.699.472 1.143.472Z"
    />
  </svg>
);
export default LocationIcon;
