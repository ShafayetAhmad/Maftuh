"use client";
import Image from "next/image";
import { FC, useState } from "react";

const PostCreator: FC = () => {
  const [postContent, setPostContent] = useState("");

  const handlePost = () => {
    if (postContent.trim()) {
      console.log("New post:", postContent);
      setPostContent("");
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200">
      <Image
        src="/public/icon_m.jpg"
        alt="Profile"
        width={40}
        height={40}
        className="w-12 h-12 rounded-full"
      />

      <div className="flex flex-col flex-grow">
        <textarea
          className="w-full p-2 text-lg border-none focus:ring-0 resize-none"
          rows={3}
          placeholder="What's happening?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={handlePost}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition-all mt-2"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCreator;
