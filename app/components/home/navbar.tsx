"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCommentEdit, BiLogOut, BiMoon } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { SlSettings } from "react-icons/sl";

export default function TopBar() {
  const [shouldShowProfileSettings, setShouldProfileSettings] =
    useState<boolean>(false);

  const showProfileSettings = () => {
    setShouldProfileSettings(true);
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-40 shadow-sm bg-white flex items-center justify-between space-x-3 py-1 px-3">
      <div className="flex items-center space-x-2">
        <Image alt="Facebook" src={"/fb.png"} width={39} height={39} />
        <div className="p-2 flex grow items-center space-x-1.5 bg-zinc-100 rounded-4xl">
          <CgSearch className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            className="grow border-none focus:outline-none"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="md:flex grow items-center space-x-6 hidden">
        <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
          <Image
            alt="home"
            src={"/navbar/home.png"}
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9"
          />
        </div>
        <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
          <Image
            alt="home"
            src={"/navbar/video.png"}
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9"
          />
        </div>
        <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
          <Image
            alt="home"
            src={"/navbar/social-media.png"}
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9"
          />
        </div>
        <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
          <Image
            alt="home"
            src={"/navbar/groups.png"}
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9"
          />
        </div>
        <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
          <Image
            alt="home"
            src={"/navbar/video-game.png"}
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9"
          />
        </div>
      </div>

      <div className="md:flex items-center space-x-2 flex">
        <div className=" p-1 w-10 h-10  rounded-full bg-zinc-200 flex items-center justify-center">
          <Image
            alt="home"
            src={"/navbar/grid.png"}
            width={0}
            height={0}
            sizes="100vh"
            className="w-10 h-10 object-contain p-1.5"
          />
        </div>
        <div className=" p-1 w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
          <Image
            alt="home"
            src={"/navbar/social.png"}
            width={0}
            height={0}
            sizes="100vh"
            className=" w-10 h-10 object-cover"
          />
        </div>

        <div className=" p-1 w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
          <Image
            alt="home"
            src={"/navbar/bell.png"}
            width={0}
            height={0}
            sizes="100vh"
            className=" w-10 h-10 object-cover p-1.5"
          />
        </div>

        <div className="w-10 h-10 relative rounded-full">
          <div onClick={showProfileSettings} className="cursor-pointer">
            <Image
              alt="home"
              src={"/users/39.jpg"}
              width={0}
              height={0}
              sizes="100vh"
              className=" w-10 h-10 object-cover rounded-full"
            />
            <IoIosArrowDropdownCircle className="w-4 h-4 bg-white rounded-full text-gray-500 stroke-1 stroke-black absolute bottom-0 -right-0.5" />
          </div>
          {shouldShowProfileSettings && (
            <div className="w-90 h-auto shadow-lg rounded-2xl bg-white absolute top-full border-t border-t-gray-100 right-3">
              <div className="m-3  ">
                <div className="shadow-lg rounded-xl p-3">
                  <div className=" flex items-center space-x-2.5 mb-3 pb-3 border-b border-b-gray-300">
                    <Image
                      alt="Facebook"
                      src={`/users/18.jpg`}
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="object-cover w-9 h-9 rounded-full"
                    />
                    <p className="font-medium">Amanuel Ferede</p>
                  </div>
                  <Link
                    href={`#`}
                    className=" rounded-lg py-2 bg-gray-200 flex items-center justify-center"
                  >
                    <Image
                      alt="Facebook"
                      src={`/addpost/friends.png`}
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="object-cover w-4 h-4"
                    />
                    <p>See all profiles</p>
                  </Link>
                </div>
                <div className="p-3 pt-3.5">
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                      <SlSettings className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                      <p className="font-semibold">Settings and privacy</p>
                    </div>

                    <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                      <FiHelpCircle className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                      <p className="font-semibold">Help and support</p>
                    </div>

                    <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                      <BiMoon className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                      <p className="font-semibold">Dispaly and accessiblity </p>
                    </div>

                    <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                      <BiCommentEdit className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                      <p className="font-semibold">Give feedback </p>
                    </div>

                    <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                      <BiLogOut className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                      <p className="font-semibold">Log out </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
