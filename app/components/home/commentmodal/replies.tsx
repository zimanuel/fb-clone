"use client";
import { _replies } from "@/app/seed/faker/reply";
import { users } from "@/app/seed/faker/user";
import Image from "next/image";
import { useState } from "react";
export default function Replies({
  replies,
}: {
  replies: {
    reply: string;
    hasReply: boolean;
  }[];
}) {
  return (
    <>
      {replies.slice(0, 2).map((reply, index) => {
        return (
          <Reply
            key={index}
            index={index}
            reply={reply}
            isLast={index === _replies.slice(0, 2).length - 1}
          />
        );
      })}
    </>
  );
}

function Reply({
  reply,
  isLast,
  index,
}: {
  reply: {
    reply: string;
    hasReply: boolean;
  };
  isLast: boolean;
  index: number;
}) {
  const [_isLast] = useState<boolean>(true);
  return (
    <div className="flex ">
      <div className="w-[7%] flex-col -space-y-2">
        <div
          className={`h-8 w-full ${
            isLast
              ? "border-l-0 border-b-0 border-l-transparent border-b-transparent rounded-bl-none"
              : "border-l-2 border-l-gray-200 border-b-2 border-b-gray-200 rounded-bl-xl"
          }`}
        ></div>
        <div
          className={`h-full w-full ${
            isLast
              ? "border-l-0 border-b-0 border-l-transparent border-b-transparent rounded-bl-none"
              : "border-l-2 border-l-gray-200 border-b-2 border-b-gray-200 rounded-bl-xl"
          }`}
        ></div>
      </div>
      <div className="w-[93%]  ">
        <div className="relative">
          <div className="flex flex-col ">
            <div className="h-3"></div>
            <div className="border-l-2 border-l-gray-200">
              <div className=" flex  space-x-3  -ml-3">
                <Image
                  alt="comment"
                  src={`/users/${index + 4}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-8 h-8 rounded-full flex-none"
                />
                <div className=" flex flex-col ">
                  <div className="bg-gray-100 rounded-xl p-2.5">
                    <p className="font-semibold">{users[index + 2].name}</p>
                    <p className="">{reply.reply}</p>
                  </div>
                  <div className="flex space-x-3 mt-2">
                    <p>3h</p>
                    <p>Like</p>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <ReplyReplies replies={_replies} />
          {!_isLast && (
            <div className=" flex h-10  ">
              <div className="w-[7%] flex flex-col ">
                <div className="w-full h-3/4 border-l-2 border-b-2 border-l-gray-200 border-b-gray-200 rounded-bl-xl"></div>
                <div className="w-full h-[25%] border-l-2  border-l-gray-200"></div>
              </div>
              <div className="w-[93%] h-full relative ">
                <p className="relative pt-4 ">View all 88 replies</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReplyReplies({
  replies,
}: {
  replies: {
    reply: string;
    hasReply: boolean;
  }[];
}) {
  return (
    <>
      {replies.slice(0, 2).map((_reply, index) => {
        return (
          <ReplyForReply
            key={index}
            index={index}
            reply={_reply}
            isFirst={index === 0 ? true : false}
            isLast={index === replies.slice(0, 2).length - 1}
          />
        );
      })}
    </>
  );
}

function ReplyForReply({
  reply,
  isLast,
  index,
}: {
  reply: {
    reply: string;
    hasReply: boolean;
  };
  isLast: boolean;
  index: number;
  isFirst: boolean;
}) {
  return (
    <div className="flex w-full">
      <div className="w-[7%] flex-col -space-y-2">
        <div
          className={`h-8 w-full ${
            isLast
              ? "border-l-0 border-b-0 border-b-transparent border-l-transparent rounded-bl-none"
              : "border-l-2 border-l-gray-200 border-b-2 border-b-gray-200 rounded-bl-xl"
          }`}
        ></div>
        <div
          className={`h-full w-full ${
            isLast
              ? "border-l-0 border-l-transparent rounded-bl-none"
              : "border-l-2 border-l-gray-200 border-b-2 border-b-gray-200 rounded-bl-xl"
          }`}
        ></div>
      </div>{" "}
      <div className="w-[93%]">
        <div className="relative">
          <div className="flex flex-col ">
            <div className={`h-3`}></div>
            <div className="">
              <div className=" flex  space-x-3  -ml-3">
                <Image
                  alt="comment"
                  src={`/users/${index + 4}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-8 h-8 rounded-full flex-none"
                />
                <div className=" flex flex-col ">
                  <div className="bg-gray-100 rounded-xl p-2.5">
                    <p className="font-semibold">{users[index + 2].name}</p>
                    <p className="">{reply.reply}</p>
                  </div>
                  <div className="flex space-x-3 mt-2">
                    <p>3h</p>
                    <p>Like</p>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
