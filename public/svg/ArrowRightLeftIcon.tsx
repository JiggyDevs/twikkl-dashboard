import * as React from "react";
import { SVGProps } from "react";
const ArrowRightLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.5 25.25 2.25 2.25 7.5-7.5-7.5-7.5-2.25 2.25L26.75 20l-5.25 5.25Zm-3-10.5-2.25-2.25-7.5 7.5 7.5 7.5 2.25-2.25L13.25 20l5.25-5.25Z"
    />
  </svg>
);
export default ArrowRightLeftIcon;
