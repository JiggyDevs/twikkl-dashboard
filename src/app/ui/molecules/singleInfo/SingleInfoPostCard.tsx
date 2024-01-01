"use client";

import Image from "next/image";

import { useCallback } from "react";

import { usePathname, useRouter } from "next/navigation";

import ReactPlayer from "react-player/lazy";

const SingleInfoPostCard = ({
  img = "",
  username = "",
  content,
  report,
  tags,
  time,
  video,
}: {
  img: string;
  username: string;
  content: string;
  report?: string;
  tags?: string[];
  time: string;
  video: string;
  params?: { slug: string };
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToPage = useCallback(
    (id: string | number) => router.push(pathname + "/" + id),
    []
  );

  return (
    <div className="flex items-center justify-between">
      <div
        className="flex gap-x-4 items-start w-2/3 cursor-pointer"
        onClick={() => navigateToPage(username)}
      >
        <Image
          src={img}
          width={47}
          height={47}
          alt="user-image"
          className="h-12 w-12 rounded-full"
          placeholder="blur"
          blurDataURL="/img/profile.webp"
        />

        <div className="w-[90%]">
          <h2 className="font-semibold text-twikkl-main">{username}</h2>
          {report ? <h3 className="text-twikkl-primary">{report}</h3> : null}
          <p className="text-sm text-twikkl-main">
            {content}{" "}
            {tags?.length
              ? tags.map((tag, i) => (
                  <span
                    key={`recent-user-` + { tag } + i}
                    className="text-twikkl-inactive"
                  >
                    {tag}{" "}
                  </span>
                ))
              : null}
          </p>
          <span className="text-twikkl-primary">{time}</span>
        </div>
      </div>

      {video ? (
        <div className="relative h-28 w-2/12">
          <ReactPlayer
            className="absolute"
            url={video}
            width="100%"
            height="100%"
            light={true}
          />
        </div>
      ) : null}
    </div>
  );
};

export default SingleInfoPostCard;
