import * as React from "react";
import { SVGProps } from "react";
const WalletsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#C0CCC1"}
      d="M17.156 13.25a.781.781 0 1 0 0 1.563h2.813a.781.781 0 1 0 0-1.563h-2.813ZM.75 3.25v16.094a3.906 3.906 0 0 0 3.906 3.906H19.97a3.906 3.906 0 0 0 3.906-3.906V8.406a3.908 3.908 0 0 0-3.125-3.828V3.406A2.656 2.656 0 0 0 18.094.75H3.406a2.656 2.656 0 0 0-2.652 2.5H.75Zm18.438.156V4.5H3.405a1.094 1.094 0 1 1 0-2.188h14.688c.604 0 1.093.49 1.093 1.094ZM2.313 6.062h17.656a2.343 2.343 0 0 1 2.343 2.344v10.938a2.343 2.343 0 0 1-2.343 2.343H4.656a2.344 2.344 0 0 1-2.343-2.343V6.062Z"
    />
  </svg>
);
export default WalletsIcon;
