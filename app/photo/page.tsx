import Image from "next/image";
import { FiMoreHorizontal } from "react-icons/fi";
import Footer from "../components/home/photo/footer";
import Comments from "../components/home/photo/comments";
import { CgClose } from "react-icons/cg";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { BiFullscreen, BiTag } from "react-icons/bi";
import Link from "next/link";
export default function Photo() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex">
        <div className="w-[73%] bg-black h-screen grow flex items-center justify-center relative">
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between ">
            <div className="flex items-center space-x-2">
              <Link href={`/`}>
                <CgClose className="w-7 h-7 text-white" />
              </Link>
              <Image
                alt="Facebook"
                src={"/fb.png"}
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8"
              />
            </div>
            <div className="flex space-x-5">
              <BsZoomIn className="w-5.5 h-5.5 text-white" />
              <BsZoomOut className="w-5.5 h-5.5 text-white" />
              <BiTag className="w-5.5 h-5.5 text-white" />
              <BiFullscreen className="w-5.5 h-5.5 text-white" />
            </div>
          </div>
          <div className="w-127 h-full">
            <Image
              alt="comment"
              src={`/users/39.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-[27%] pt-12.5">
          <div className="h-full overflow-y-auto">
            <div className="mx-2.5 py-2 flex items-center justify-between border-b border-b-gray-200">
              <div className="flex items-center space-x-1">
                <p className="text-[0.85rem] text-zinc-600">
                  This photo is from a post
                </p>
              </div>
              <p className="text-[0.85rem]">View post</p>
            </div>
            <div className="mx-2.5 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <Image
                    alt="Facebook"
                    src={"/users/2.jpg"}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-9 h-9 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-[0.95rem] font-semibold">
                      Amanuel Ferede
                    </p>
                    <p className="text-[0.85rem]">3 hrs</p>
                  </div>
                </div>
                <FiMoreHorizontal className="w-4.5 h-4.5" />
              </div>
            </div>
            <div className="my-2 flex justify-between px-2.5">
              <div className="flex space-x-1">
                <div className="flex -space-x-1">
                  <Image
                    alt="Facebook"
                    src={"/reactions/like.png"}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-5 h-5 "
                  />
                  <Image
                    alt="Facebook"
                    src={"/reactions/love.png"}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-5 h-5 "
                  />
                  <Image
                    alt="Facebook"
                    src={"/reactions/care.png"}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-5 h-5 "
                  />
                </div>
                <p className="text-[0.93rem]">22</p>
              </div>
              <div className="flex space-x-1">
                <p className="text-[0.93rem]">9</p>
                <Image
                  alt="Facebook"
                  src={"/post/comment.png"}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-4 h-4 "
                />
              </div>
            </div>
            <Footer />
            <Comments />
          </div>
        </div>
      </div>
      <div className="py-1 px-3 flex items-center justify-between border-b-2 border-b-gray-200">
        <div className="grow"></div>
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
        </div>
      </div>
    </>
  );
}
