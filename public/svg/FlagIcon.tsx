import * as React from "react";
import { SVGProps } from "react";
const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#143615" />
    <path
      fill="#F1FCF2"
      d="M26.75 12.5V29a.75.75 0 0 1-1.144.637L20 26.131l-5.606 3.506a.713.713 0 0 1-.394.113.73.73 0 0 1-.366-.094.76.76 0 0 1-.384-.656V12.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5Z"
    />
  </svg>
);
export default FlagIcon;
