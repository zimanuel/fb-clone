"use client";
import { users } from "@/app/seed/faker/user";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
export default function ReactionModal() {
  return (
    <div className="fixed bg-zinc-100/80 top-0 left-0 right-0 bottom-0 z-50">
      <div className="max-w-125 bg-white mx-auto mt-24 shadow-lg rounded-xl">
        <div className="flex sticky top-0 left-0 right-0 items-center justify-between p-3 border-b border-b-gray-100">
          <div className="flex space-x-3">
            <p>All</p>
            <div className="flex space-x-1">
              <Image
                src={`/reactions/like.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 rounded-full"
              />
              <p>22</p>
            </div>
            <div className="flex space-x-1">
              <Image
                src={`/reactions/love.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 rounded-full"
              />
              <p>45</p>
            </div>
            <div className="flex space-x-1">
              <Image
                src={`/reactions/care.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-6 h-6 rounded-full"
              />
              <p>32</p>
            </div>
          </div>
          <CgClose
            className="w-8 rounded-full h-8 p-1 text-zinc-600 cursor-pointer bg-gray-200 hover:bg-gray-300"
            onClick={() => {}}
          />
        </div>
        <div className="flex flex-col space-y-4 p-3">
          {Array.from({ length: 7 }, (el, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <div className="relative w-8 h-8 rounded-full">
                    <Image
                      src={`${users[index].pic}`}
                      alt="User"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-8 h-8 rounded-full"
                    />
                    <Image
                      src={`/reactions/like.png`}
                      alt="User"
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-5 h-5 rounded-full absolute -bottom-1 -right-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[0.95rem] font-normal">
                      {users[index].name}
                    </p>
                  </div>
                </div>
                <button className="bg-gray-200 px-2 py-1.5 rounded-md flex space-x-1 items-center justify-center">
                  <Image
                    src={`/addpost/friends.png`}
                    alt="User"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-4 h-4 rounded-full"
                  />
                  <span className="text-[0.95rem]">Add Freind</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
