import { CgClose, CgMore } from "react-icons/cg";
import Image from "next/image";
import { BiPause, BiPlus, BiVolumeMute, BiWorld } from "react-icons/bi";
import { users } from "../seed/faker/user";
export default function Stories() {
  return (
    <div className="">
      <div className="flex">
        <div className="w-[25%] bg-white h-full fixed top-0 left-0 bottom-0">
          <div className="flex space-x-3 px-3.5 py-2 border-b border-b-gray-200">
            <CgClose className="bg-black/30 opacity-50 p-2 w-10 h-10 rounded-full" />
            <Image
              alt="Facebook"
              src={"/fb.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10 rounded-full"
            />
          </div>

          <div className="overflow-y-auto custom-scrollbar h-full">
            <div className="flex flex-col space-y-2 px-3.5 py-2">
              <p className="text-xl font-semibold">Stories</p>
              <div className="flex space-x-2">
                <p className="text-blue-600">Archive</p>
                <p className="text-blue-600">Settings</p>
              </div>
              <p>Your story</p>
              <div className="flex space-x-2">
                <BiPlus className="w-10 h-10 p-2 bg-gray-200 rounded-full" />
                <div className="flex flex-col space-y-1.5">
                  <p className="text-[0.89rem] font-semibold">Create a story</p>
                  <p className="text-[0.89rem]">
                    Share a photo or write something
                  </p>
                </div>
              </div>
              <p className="font-semibold text-[0.96rem]">All stories</p>
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 8 }, (el, index) => {
                  return (
                    <div key={index} className="flex space-x-2">
                      <Image
                        alt="Facebook"
                        src={`${users[index].pic}`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-10 h-10 object-cover rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="text-[0.98rem]  font-normal">
                          {users[index].name}
                        </p>
                        <div className="flex space-x-2">
                          <p className="text-[0.89rem]">44 min</p>
                          <p className="text-[0.89rem] text-blue-500">2 new</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[85%] h-screen py-3 grow ml-[25%] bg-black relative ">
          <div className="md:flex items-center space-x-2 flex absolute top-2 right-2">
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

          <div className="w-full h-[90%] flex items-center justify-center">
            <div className="w-80 rounded-xl  h-full  relative">
              <div className="absolute w-full px-2 top-3">
                <div className="flex space-x-1.5 mb-2">
                  <div className="w-1/2 grow h-1.5 rounded-lg bg-gray-200"></div>
                  <div className="w-1/2 grow h-1.5 rounded-lg bg-gray-200"></div>
                </div>
                <div className="flex flex-col space-y-2 absolute">
                  <div className="flex space-x-1.5 items-center">
                    <Image
                      alt="Facebook"
                      src={`/users/5.jpg`}
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-white">Amanuel Ferede</p>
                    <p className="text-white">44 m</p>
                    <BiWorld className="w-4 h-4 text-white" />
                    <BiVolumeMute className="w-4 h-4 text-white" />
                    <BiPause className="w-6 h-6 text-white" />
                    <CgMore className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <Image
                alt="Facebook"
                src={`/users/3.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full h-[10%] flex items-center">
            <div className="max-w-xl mx-auto mt-3">
              <div className="flex space-x-1.5 items-center ">
                <input
                  className="px-2 py-1.5 grow border-2 w-full placeholder:text-white border-white rounded-4xl"
                  placeholder="Write message"
                />
                <div className="flex">
                  <Image
                    alt="Facebook"
                    src={`/reactions/like.png`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10"
                  />
                  <Image
                    alt="Facebook"
                    src={`/reactions/love.png`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10 stroke-white"
                  />
                  <Image
                    alt="Facebook"
                    src={`/reactions/care.png`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10"
                  />
                  <Image
                    alt="Facebook"
                    src={`/reactions/haha.png`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10"
                  />
                  <Image
                    alt="Facebook"
                    src={`/reactions/wow.png`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10"
                  />
                  <Image
                    alt="Facebook"
                    src={`/reactions/sad.png`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10"
                  />
                  <Image
                    alt="Facebook"
                    src={`/reactions/angry.png`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
