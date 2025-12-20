"use client";
import { users } from "@/app/seed/faker/user";
import Image from "next/image";
import { useState } from "react";
export default function Contacts() {
  const [showScrollBar, setShowScrollBar] = useState<boolean>(false);

  return (
    <div
      className="md:w-[23.5%] w-full pt-12  h-full fixed top-0 right-0 bottom-0 z-30 "
      onMouseOver={() => setShowScrollBar(true)}
      onMouseLeave={() => setShowScrollBar(false)}
    >
      <div
        className={`overflow-y-auto pt-8 pb-12 pl-12 h-full ${
          showScrollBar ? "custom-scrollbar" : "custom-scrollbar-hidden"
        }  `}
      >
        {" "}
        <p className="my-1.5 font-semibold">Birthdays</p>
        <div className="flex space-x-1.5">
          <Image
            src={"/sidebar/gift.png"}
            width={0}
            height={0}
            sizes="100hv"
            alt="story"
            className="w-7 h-7  object-cover"
          />
          <p className="text-sm">
            Amanuel Ferede and 3 others have birthdays today
          </p>
        </div>
        <p className="my-1 font-semibold">Contacts</p>
        <div
          className="bg-zinc-100 opacity-35
"
        >
          {users.slice(0, 10).map((user, index) => (
            <div
              className="flex px-2 py-1.5 space-x-3 items-center"
              key={index}
            >
              <Image
                src={user.pic}
                width={0}
                height={0}
                sizes="100hv"
                alt="story"
                className="w-10 h-10 rounded-full object-cover border border-zinc-200 shadow-sm"
              />
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
