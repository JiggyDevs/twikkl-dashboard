import * as React from "react";
import { SVGProps } from "react";
const LikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#143615" />
    <path
      fill="#E20000"
      fillRule="evenodd"
      d="M20 10.971c6.657-6.843 23.3 5.132 0 20.53-23.301-15.397-6.657-27.373 0-20.53Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LikeIcon;
