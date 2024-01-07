import Image from "next/image";
import LikeCommentIcon from "../../../../public/svg/LikeCommentIcon";
import EmptyLikeIcon from "../../../../public/svg/EmptyLikeIcon";
import { ArrowDownIcon } from "../../../../public/svg";

const Comment = ({
  user,
  img,
  likes,
  time,
  comment,
  replies,
}: {
  user?: string;
  img: string;
  comment: string;
  time: string;
  likes: number;
  replies?:
    | {
        img: string;
        comment: string;
        time: string;
        likes: number;
        //   user: string;
      }[]
    | undefined;
}) => {
  return (
    <div className="px-6">
      <div className="grid grid-cols-[1.5fr_8.5fr] md:grid-cols-[1fr_9fr] items-start ">
        <Image
          src={img || "/img/profile.webp"}
          width={35}
          height={35}
          alt="comment-user-image"
          className="h-12 w-12 rounded-full"
        />

        <div className="flex-grow">
          <p className="py-[0.375rem] px-[0.75rem] text-white bg-twikkl-main inline-block rounded-[1.125rem] text-twikkl-tertiary max-w-[25rem]">
            {comment}
          </p>
          <div className="text-sm text-twikkl-main">
            <div className="flex justify-between mt-2 items-center">
              <div className="space-x-8">
                <span>{time}</span>
                <span className="font-medium">Reply</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="font-medium">{likes}</span>
                {likes > 0 ? <LikeCommentIcon /> : <EmptyLikeIcon />}
              </div>
            </div>
          </div>
          {replies && replies?.length < 1 ? null : replies?.length === 1 ? (
            <div className="flex items-start gap-x-[1.125rem] mt-2">
              <Image
                src={replies[0]?.img || "/img/profile.webp"}
                width={25}
                height={25}
                alt="comment-user-image"
                className="h-6 w-6 rounded-full"
              />
              <div className="flex-grow">
                <p className="py-[0.375rem] px-[0.75rem] text-white bg-twikkl-main inline-block rounded-[1.125rem] text-twikkl-tertiary max-w-[25rem]">
                  {replies[0]?.comment}
                </p>
                <div className="text-sm text-twikkl-main">
                  <div className="flex justify-between mt-2 items-center">
                    <div className="space-x-8">
                      <span>{replies[0]?.time}</span>
                      <span className="font-medium">Reply</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <span className="font-medium">{replies[0]?.likes}</span>
                      {replies[0]?.likes > 0 ? (
                        <LikeCommentIcon />
                      ) : (
                        <EmptyLikeIcon />
                      )}
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          ) : replies && replies?.length > 1 ? (
            <div className="mt-2 flex gap-x-2 items-center">
              <span className="text-twikkl-main font-medium cursor-pointer">
                View replies({replies?.length})
              </span>
              <ArrowDownIcon color="#143615" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Comment;
