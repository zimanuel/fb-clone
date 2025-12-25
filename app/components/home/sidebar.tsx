"use client";
import { sideBarData } from "@/app/seed/faker/sidebar";
import Image from "next/image";
import { useState } from "react";
export default function SideBar() {
  const [showScrollBar, setShowScrollBar] = useState<boolean>(false);
  return (
    <div
      className={`md:w-[22%] w-full pt-12  h-full fixed md:block hidden top-0 left-0 bottom-0 z-30 `}
      onMouseOver={() => setShowScrollBar(true)}
      onMouseLeave={() => setShowScrollBar(false)}
    >
      <div
        className={`overflow-y-auto pt-8 pb-12 pl-5 h-full ${
          showScrollBar ? "custom-scrollbar" : "custom-scrollbar-hidden"
        }  `}
      >
        {sideBarData.map((data, index) => (
          <div
            key={index}
            className="hover:bg-zinc-200 p-2 flex items-center space-x-2 rounded-tl-lg rounded-bl-lg"
          >
            <Image
              alt="Facebook"
              src={data.image}
              width={0}
              height={0}
              sizes="100vh"
              className="object-contain w-8 h-8"
            />

            <p className="text-[0.98rem] font-medium">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
