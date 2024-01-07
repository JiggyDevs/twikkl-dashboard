import Comment from "./Comment";

const CommentBox = () => {
  const commentBox = [
    {
      img: "/img/profile.webp",
      comment: "What on earth is this! 😲 🤯 ",
      time: "5mins",
      likes: 12,
    },
    {
      img: "/img/profile.webp",
      comment: "Amazing! I look forward to seeing more of this.",
      time: "5mins",
      likes: 0,
      replies: [
        {
          img: "/img/profile.webp",
          comment: "seeing more of this.",
          time: "5mins",
          likes: 1,
        },
        {
          img: "/img/profile.webp",
          comment: "awesome",
          time: "5mins",
          likes: 9,
        },
      ],
    },
    {
      img: "/img/profile.webp",
      comment: "Thank you!",
      time: "5mins",
      likes: 0,
    },
    {
      img: "/img/profile.webp",
      comment:
        "Absolutely love it! Can’t wait to see more of such post. I will be on the lookout. Thank you 🎉 ",
      time: "5mins",
      likes: 12,
      replies: [
        {
          img: "/img/profile.webp",
          comment: "Yeah! Great one",
          time: "5mins",
          likes: 1,
        },
      ],
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col gap-y-4 overflow-y-auto max-h-72">
        {commentBox.map((comment, i) => (
          <Comment
            key={`user-comment-${i}`}
            comment={comment?.comment}
            img={comment?.img}
            likes={comment?.likes}
            time={comment?.time}
            replies={comment?.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
