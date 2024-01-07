import * as React from "react";
import { SVGProps } from "react";
const LikeCommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#E20000"}
      fillRule="evenodd"
      d="M12 1.971c6.657-6.843 23.3 5.132 0 20.53C-11.301 7.103 5.343-4.873 12 1.97Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LikeCommentIcon;
