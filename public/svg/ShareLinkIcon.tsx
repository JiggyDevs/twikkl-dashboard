import * as React from "react";
import { SVGProps } from "react";
const ShareLinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m29 20-7-7v4c-7 1-10 6-11 11 2.5-3.5 6-5.1 11-5.1V27l7-7Z"
    />
  </svg>
);
export default ShareLinkIcon;
