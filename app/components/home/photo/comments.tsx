"use client";
import { comments } from "@/app/seed/faker/comment";
import Replies from "./replies";
import Image from "next/image";
import { useState } from "react";
import { users } from "@/app/seed/faker/user";
import { _replies } from "@/app/seed/faker/reply";
export default function Comments() {
  const [_isLast] = useState<boolean>(true);

  return (
    <div className="px-5.5">
      {comments.slice(0, 4).map((comment, index) => {
        return (
          <div key={index} className=" mb-3">
            <div className={`   w-full relative  `}>
              <div className={`relative border-l-2 border-l-gray-200`}>
                <div className="flex  space-x-3 -ml-4  ">
                  <Image
                    alt="comment"
                    src={`/users/${index + 1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-8 h-8 rounded-full flex-none"
                  />
                  <div className=" flex flex-col ">
                    <div className="bg-gray-100 rounded-xl p-2.5">
                      <p className="font-semibold text-[0.94rem]">
                        {users[index + 1].name}
                      </p>
                      <p className="text-[0.9rem]">{comment}</p>
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

            <div className="flex flex-col">
              <Replies replies={_replies} />
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
        );
      })}
    </div>
  );
}
