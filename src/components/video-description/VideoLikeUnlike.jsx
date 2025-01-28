import { useState } from "react";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";

export default function VideoLikeUnlike({ video }) {
  const [likeCount, setLikeCount] = useState(video.likes || 0);
  const [dislikeCount, setDislikeCount] = useState(video.dislikes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);

      if (isDisliked) {
        setDislikeCount((prev) => prev - 1);
        setIsDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikeCount((prev) => prev - 1);
      setIsDisliked(false);
    } else {
      setDislikeCount((prev) => prev + 1);
      setIsDisliked(true);

      if (isLiked) {
        setLikeCount((prev) => prev - 1);
        setIsLiked(false);
      }
    }
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1 items-center">
        <button onClick={handleLike}>
          <img
            className={`w-5 ${isLiked ? "opacity-100" : "opacity-50"}`}
            src={Like}
            alt="Like"
          />
        </button>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likeCount}
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <button onClick={handleDislike}>
          <img
            className={`w-5 ${isDisliked ? "opacity-100" : "opacity-50"}`}
            src={UnLike}
            alt="Unlike"
          />
        </button>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {dislikeCount}
        </div>
      </div>
    </div>
  );
}
