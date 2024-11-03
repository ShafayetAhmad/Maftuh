import { FC } from "react";
import { FaHeart, FaRetweet, FaComment, FaShare } from "react-icons/fa";
import Image from "next/image";

interface PostProps {
  username: string;
  handle: string;
  timestamp: string;
  content: string;
  avatarUrl: string;
}

const Post: FC<PostProps> = ({
  username,
  handle,
  timestamp,
  content,
  avatarUrl,
}) => {
  return (
    <div className="border-b border-gray-200 p-4 flex gap-4">
      <Image
        src={avatarUrl}
        alt="avatar"
        width={50}
        height={50}
        className="rounded-full"
      />

      <div>
        <div className="flex items-center gap-2">
          <span className="font-bold">{username}</span>
          <span className="text-gray-500">@{handle}</span>
          <span className="text-gray-500">· {timestamp}</span>
        </div>

        <p className="text-gray-800 my-2">{content}</p>

        <div className="flex gap-8 mt-2 text-gray-500">
          <button className="flex items-center gap-2 hover:text-blue-500">
            <FaComment /> <span>Comment</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-500">
            <FaRetweet /> <span>Retweet</span>
          </button>
          <button className="flex items-center gap-2 hover:text-red-500">
            <FaHeart /> <span>Like</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-500">
            <FaShare /> <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
