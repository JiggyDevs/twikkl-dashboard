import * as React from "react";
import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
    className="cursor-pointer"
  >
    <path
      fill={props.color || "#143615"}
      d="M20 2.5a17.5 17.5 0 1 1 0 35 17.5 17.5 0 0 1 0-35Zm0 15.378-4.065-4.066a1.5 1.5 0 1 0-2.123 2.123L17.878 20l-4.066 4.065a1.5 1.5 0 1 0 2.123 2.122L20 22.122l4.065 4.066a1.5 1.5 0 1 0 2.122-2.123L22.122 20l4.066-4.065a1.5 1.5 0 1 0-2.123-2.123L20 17.878Z"
    />
  </svg>
);
export default CloseIcon;
