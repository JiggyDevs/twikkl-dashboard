import * as React from "react";
import { SVGProps } from "react";
const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#C0CCC1"}
      d="M10.667 12.444a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Zm0 1.778a7.111 7.111 0 1 1 0-14.222 7.111 7.111 0 0 1 0 14.222Zm8.889 8.89v-2.668a2.667 2.667 0 0 0-2.667-2.666H4.444a2.667 2.667 0 0 0-2.666 2.666v2.667a.889.889 0 1 1-1.778 0v-2.667A4.445 4.445 0 0 1 4.444 16H16.89a4.445 4.445 0 0 1 4.444 4.444v2.667a.889.889 0 1 1-1.777 0Z"
    />
  </svg>
);
export default UsersIcon;
