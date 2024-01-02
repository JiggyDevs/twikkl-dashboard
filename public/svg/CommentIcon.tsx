import * as React from "react";
import { SVGProps } from "react";
const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.25 11A3.25 3.25 0 0 0 10 14.25v8.5A3.25 3.25 0 0 0 13.25 26H14v2.75c0 1.03 1.176 1.618 2 1L21 26h5.75A3.25 3.25 0 0 0 30 22.75v-8.5A3.25 3.25 0 0 0 26.75 11h-13.5Z"
    />
  </svg>
);
export default CommentIcon;
