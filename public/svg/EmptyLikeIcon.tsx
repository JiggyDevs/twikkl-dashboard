import * as React from "react";
import { SVGProps } from "react";
const EmptyLikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#C0CCC1"
        d="m12 4.122-1.076-1.105C8.4.422 3.771 1.317 2.1 4.58c-.785 1.534-.962 3.75.47 6.577 1.38 2.723 4.252 5.984 9.43 9.536 5.178-3.552 8.047-6.813 9.429-9.536 1.432-2.829 1.257-5.043.47-6.577-1.67-3.263-6.3-4.16-8.824-1.565L12 4.122ZM12 22.5C-11 7.302 4.918-4.56 11.736 1.715c.09.082.178.168.264.256.085-.088.172-.173.264-.255C19.08-4.563 34.999 7.301 12 22.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default EmptyLikeIcon;
