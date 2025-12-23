import { CgClose } from "react-icons/cg";
import OriginalUserPost from "../post/userpost/post";
import Image from "next/image";
import { comments } from "@/app/seed/faker/comment";
import { users } from "@/app/seed/faker/user";
import { _replies } from "@/app/seed/faker/reply";
import Replies from "./replies";

export default function CommentModal() {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-zinc-100/70">
      <div className="max-w-182 mx-auto mt-10 bg-white rounded-xl shadow-xl">
        <div className="sticky rounded-tl-xl rounded-tr-xl top-0 left-0 right-0 bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
          <p>{""}</p>
          <p className="text-xl font-bold">Amanuel Ferede&apos;s Post</p>
          <CgClose className="w-8 h-8 p-1.5 rounded-full bg-gray-200 hover:bg-gray-300" />
        </div>
        <div className="max-h-93 overflow-y-auto custom-scrollbar m-0">
          <OriginalUserPost />
          <div className="pl-7 py-1 w-full">
            {comments.map((comment, index) => {
              return (
                <div key={index} className=" w-full relative mb-6">
                  <div className={`border-l-2 border-l-gray-200 w-full `}>
                    <div className="flex space-x-3 relative -left-4 -top-4">
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
                          <p className="font-semibold">
                            {users[index + 1].name}
                          </p>
                          <p className="">{comment}</p>
                        </div>
                        <div className="flex space-x-3">
                          <p>3h</p>
                          <p>Like</p>
                          <p>Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden">
                    <div className=" h-7 inline-block rounded-bl-xl  relative border-l-2 border-b-2 border-b-gray-200 border-l-gray-200">
                      <p className="relative w-auto left-7 -bottom-1/2 bg-white">
                        View 7 replies
                      </p>
                    </div>
                  </div>

                  <Replies replies={_replies} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="pb-3 pt-4  px-4 flex items-center space-x-2">
          <Image
            alt="profile"
            src={"/users/3.jpg"}
            height={0}
            width={0}
            sizes="100vh"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex grow flex-col px-3 py-2 rounded-xl bg-zinc-100">
            <input className=" block w-full focus:outline-none" />
            <div className="flex items-center justify-between">
              <div className="flex space-x-4 py-2">
                <Image
                  alt="somehing"
                  src={`/commentsmodal/manager.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
                <Image
                  alt="somehing"
                  src={`/commentsmodal/happy-face.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />

                <Image
                  alt="somehing"
                  src={`/commentsmodal/camera.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
                <Image
                  alt="somehing"
                  src={`/commentsmodal/gif.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
                <Image
                  alt="somehing"
                  src={`/commentsmodal/chat-bubble.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-5 h-5 "
                />
              </div>
              <Image
                alt="somehing"
                src={`/commentsmodal/telegram.png`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-5 h-5 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
