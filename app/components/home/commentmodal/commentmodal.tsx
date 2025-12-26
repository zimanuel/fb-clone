"use client";
import { CgClose } from "react-icons/cg";
import OriginalUserPost from "../post/userpost/post";
import Image from "next/image";

import Comments from "./comments";
import { useState } from "react";
import CommentsSkeleton from "../skeletons/comments";

export default function CommentModal() {
  const [isLoading] = useState<boolean>(true);
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-zinc-100/70">
      <div className="max-w-179 mx-auto mt-10 bg-white rounded-xl shadow-xl">
        <div className="sticky rounded-tl-xl rounded-tr-xl top-0 left-0 right-0 bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
          <p>{""}</p>
          <p className="text-xl font-bold">Amanuel Ferede&apos;s Post</p>
          <CgClose className="w-8 h-8 p-1.5 rounded-full bg-gray-200 hover:bg-gray-300" />
        </div>
        <div className="max-h-93 overflow-y-auto custom-scrollbar m-0">
          <OriginalUserPost />
          {isLoading && <CommentsSkeleton />}

          {!isLoading && <Comments />}
        </div>

        <div className="pb-3 pt-4  px-4 flex items-center space-x-2">
          <Image
            alt="profile"
            src={"/users/3.jpg"}
            height={0}
            width={0}
            sizes="100vh"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex grow flex-col px-3 py-2 rounded-xl bg-slate-100">
            <input
              className=" block w-full focus:outline-none"
              placeholder="Write a comment"
            />
            <div className="flex items-center justify-between">
              <div className="flex space-x-4 py-2">
                <Image
                  alt="somehing"
                  src={`/commentsmodal/manager.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
                <Image
                  alt="somehing"
                  src={`/commentsmodal/happy-face.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />

                <Image
                  alt="somehing"
                  src={`/commentsmodal/camera.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
                <Image
                  alt="somehing"
                  src={`/commentsmodal/gif.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
                <Image
                  alt="somehing"
                  src={`/commentsmodal/chat-bubble.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
              </div>
              <Image
                alt="somehing"
                src={`/commentsmodal/telegram.png`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-5 h-5 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
