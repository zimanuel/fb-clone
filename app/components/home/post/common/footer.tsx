"use client";
import Image from "next/image";
import { useRef, useState } from "react";
export default function Footer() {
  const [toShowReactionBox, settoShowReactionBox] = useState<boolean>(false);
  const timoutId = useRef<NodeJS.Timeout | null>(null);
  const showReactionEmojies = () => {
    settoShowReactionBox(true);
  };
  const hideReactionEmojies = () => {
    const _timeOutId = setTimeout(() => {
      settoShowReactionBox(false);
    }, 2000);
    timoutId.current = _timeOutId;
  };

  const keepShowingReactionEmojies = () => {
    clearTimeout(timoutId.current!);
    settoShowReactionBox(true);
  };
  return (
    <div className="relative">
      {toShowReactionBox && (
        <div
          className={`flex space-x h-auto bg-white shadow-sm rounded-3xl absolute left-2 bottom-11.5 `}
          onMouseLeave={hideReactionEmojies}
          onMouseOver={keepShowingReactionEmojies}
        >
          <Image
            alt="like"
            src={`/reactions/like.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
          />
          <Image
            alt="like"
            src={`/reactions/love.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
          />
          <Image
            alt="like"
            src={`/reactions/care.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
          />
          <Image
            alt="like"
            src={`/reactions/haha.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
          />
          <Image
            alt="like"
            src={`/reactions/wow.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
          />
          <Image
            alt="like"
            src={`/reactions/sad.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
          />
          <Image
            alt="like"
            src={`/reactions/angry.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-13 h-13 rounded-full cursor-pointer  block reaction-emoji-animation"
          />
        </div>
      )}
      <div className="flex items-center justify-between  px-2 py-1.5">
        <div className="flex items-center space-x">
          <div className="flex items-center -space-x-1.5">
            <Image
              alt="like"
              src={`/reactions/like.png`}
              width={26}
              height={26}
            />
            <Image
              alt="love"
              src={`/reactions/love.png`}
              width={26}
              height={26}
            />
            <Image
              alt="like"
              src={`/reactions/care.png`}
              width={26}
              height={26}
            />
          </div>

          <p>Betty Alex and others</p>
        </div>
        <p>33 comments</p>
      </div>

      <div className=" flex items-center justify-between px-2 pb-1.5">
        <div
          className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50"
          onMouseOver={showReactionEmojies}
          onMouseLeave={hideReactionEmojies}
        >
          <Image alt="like" src={`/post/like.png`} width={20} height={20} />
          <p>Like</p>
        </div>
        <div className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50">
          <Image
            alt="comment"
            src={`/post/comment.png`}
            width={20}
            height={20}
            className="object-cover"
          />
          <p>Comment</p>
        </div>
        <div className="flex  space-x-1 grow px-1.5 py-1.5 items-center justify-center cursor-pointer rounded-sm hover:bg-zinc-50">
          <Image
            alt="share"
            src={`/post/share.png`}
            className="object-cover"
            width={20}
            height={20}
          />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}
