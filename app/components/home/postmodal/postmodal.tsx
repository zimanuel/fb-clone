import Image from "next/image";
import { BiSmile } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export default function PostModal() {
  return (
    <div className="fixed bg-zinc-100/80 top-0 left-0 right-0 bottom-0 z-50">
      <div className="max-w-125 bg-white mx-auto mt-24 shadow-lg rounded-xl">
        <div className="flex sticky top-0 left-0 right-0 items-center justify-between p-3 border-b border-b-gray-100">
          <p></p>
          <p className="text-lg font-semibold text-center">Create a post</p>
          <CgClose className="w-7 h-7 text-zinc-300" />
        </div>

        <div className="p-4">
          <div className="flex space-x-2 mb-4">
            <Image
              src={`/users/34.jpg`}
              alt="User"
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-sm">Amanuel Ferede</p>
              <button className="flex space-x-0.5 bg-gray-200 p-0.5 items-center justify-center rounded-md">
                <Image
                  src={`/addpost/friends.png`}
                  alt="User"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-4 h-4"
                />
                <p className="text-sm">Freinds</p>
              </button>
            </div>
          </div>
          <div className="max-h-44">
            <textarea className="block resize-none focus:outline-none w-full field-sizing-content px-3 py-2 min-h-24 max-h-44" />
          </div>
          <div className="flex justify-between my-2 py-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-tl bg-lime-500"></div>
            <BiSmile className="w-8 h-8 text-zinc-400" />
          </div>
          <div className="flex items-center justify-between space-x-2 my-2 py-3 px-4 rounded-xl border-2 border-gray-200">
            <p className="font-semibold">Add to your post</p>
            <div className="flex space-x-4">
              <Image
                src={`/addpost/photos.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8"
              />
              <Image
                src={`/addpost/tag.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8"
              />
              <Image
                src={`/addpost/happy.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8"
              />

              <Image
                src={`/addpost/location.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8"
              />
              <Image
                src={`/addpost/gif.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8"
              />
            </div>
          </div>
          <button className=" block w-full py-2 px-3 bg-blue-600 text-white rounded-md text-center">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
