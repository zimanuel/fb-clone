import Image from "next/image";
import { CgSearch } from "react-icons/cg";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 shadow-md bg-white flex items-center justify-between space-x-3 py-2 px-3">
      <div className="flex items-center space-x-2">
        <Image alt="Facebook" src={"/fb.png"} width={39} height={39} />
        <div className="p-2 flex grow items-center space-x-1.5 bg-zinc-100 rounded-4xl">
          <CgSearch className="w-6 h-6 text-zinc-500" />
          <input type="text" className="grow border-none focus:outline-none" />
        </div>
      </div>

      <div className="flex grow items-center space-x-6">
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

      <div className="flex items-center space-x-2">
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
      </div>
    </div>
  );
}
