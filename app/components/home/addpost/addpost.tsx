"use client";
import { useAppDispatch } from "@/app/store/hooks";
import { openAddPostModal } from "@/app/store/slices/addpost";
import Image from "next/image";
export default function AddPost() {
  const dispatch = useAppDispatch();
  const showAddPostModal = () => {
    dispatch(openAddPostModal(true));
  };
  return (
    <div className="bg-white rounded-lg shadow-md mb-2.5 py-2 px-2.5 flex items-center space-x-3 justify-between">
      <Image
        src={`/users/14.jpg`}
        alt="Amanuel Fered"
        width={0}
        height={0}
        sizes="100vh"
        className=" w-9 h-9 rounded-full object-cover"
      />

      <input
        onChange={showAddPostModal}
        className="grow bg-gray-100 py-2 px-3 cursor-pointer border-none outline-none focus:outline-none border-2 border-zinc-300 rounded-3xl placeholder:text-lg font-semibold"
        placeholder="What on your mind, Amanuel?"
      />
      <div className="flex space-x-1">
        <Image
          src={`/addpost/video.png`}
          alt="Amanuel Fered"
          width={0}
          height={0}
          sizes="100vh"
          className=" w-9 h-9 rounded-full object-cover"
        />
        <Image
          src={`/addpost/photos.png`}
          alt="Amanuel Fered"
          width={0}
          height={0}
          sizes="100vh"
          className=" w-9 h-9 rounded-full object-cover"
        />
        <Image
          src={`/addpost/happy.png`}
          alt="Amanuel Fered"
          width={0}
          height={0}
          sizes="100vh"
          className=" w-9 h-9 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
