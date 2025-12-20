"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  openAddPostModal,
  removeUploadedMedias,
  setPostConent,
  setUploadedMedias,
} from "@/app/store/slices/addpost";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { BiSmile } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Medias from "../post/common/medias";
import { FaPencilAlt } from "react-icons/fa";

export default function PostModal() {
  const dispatch = useAppDispatch();
  const uploadedMedias = useAppSelector((state) => state.addPost.uploadedFiles);
  const postContent = useAppSelector((state) => state.addPost.postContent);

  const input = useRef<HTMLInputElement>(null);
  const [showScrollBar, setShowScrollBar] = useState<boolean>(false);

  const showFileChooser = () => {
    input.current?.click();
  };

  const onChangePostContent = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(setPostConent(e.target.value));
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (window.FileReader) {
      const files = e.target.files;

      if (files) {
        let id: number;
        for (const x in files) {
          id = 0;
          const file = files[x];

          if (file) {
            const fr = new FileReader();
            fr.onloadend = () => {
              dispatch(
                setUploadedMedias({
                  id: id++,
                  url: fr.result as string,
                  type: file.type,
                })
              );
            };
            try {
              fr.readAsDataURL(file);
            } catch {}
          }
        }
      }
      //console.log(files![0]);
    } else {
      alert("file reader not supported");
    }
  };
  return (
    <div className="fixed bg-zinc-100/80 top-0 left-0 right-0 bottom-0 z-50">
      <div className="max-w-125 bg-white mx-auto mt-24 shadow-lg rounded-xl">
        <div className="flex sticky top-0 left-0 right-0 items-center justify-between p-3 border-b border-b-gray-100">
          <p></p>
          <p className="text-lg font-semibold text-center">Create a post</p>
          <CgClose
            className="w-8 rounded-full h-8 p-1 text-zinc-600 cursor-pointer bg-gray-200 hover:bg-gray-300"
            onClick={() => {
              dispatch(openAddPostModal(false));
            }}
          />
        </div>

        <div className="p-4">
          <div className="flex space-x-2 mb-2">
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

          <div
            className={`max-h-42 overflow-y-auto transition-all duration-1000 ease-in-out  ${
              showScrollBar
                ? "custom-scrollbar-block"
                : "custom-scrollbar-hidden no-scrollbar"
            } `}
            onMouseOver={() => setShowScrollBar(true)}
            onMouseLeave={() => setShowScrollBar(false)}
          >
            <textarea
              className={`block py-3 resize-none focus:outline-none w-full field-sizing-content  max-h-auto ${
                uploadedMedias.length > 0 ? "min-h-10" : "min-h-24 "
              }`}
              placeholder="What on your mind, Amanuel?"
              onChange={onChangePostContent}
              value={postContent}
            />
            {uploadedMedias.length > 0 && (
              <>
                <BiSmile className="w-8 h-8 text-zinc-400 absolute right-2 top-2" />
                <div className="h-120 relative">
                  <Medias medias={uploadedMedias} />
                  <div className=" absolute top-0 bottom-0 left-0 right-0 bg-black/20"></div>
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex space-x-2 rounded-lg items-center bg-gray-50 py-1.5 px-2">
                      <FaPencilAlt className="w-4 h-4 " />
                      <p className="text-black font-semibold ">Edit all</p>
                    </div>
                    <CgClose
                      className="w-8 h-8 cursor-pointer text-zinc-500 rounded-full bg-gray-50 p-1"
                      onClick={() => {
                        dispatch(removeUploadedMedias());
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between my-2 py-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-tl bg-lime-500"></div>
            <BiSmile className="w-8 h-8 text-zinc-400" />
          </div>
          <div className="flex items-center justify-between space-x-2 my-2 py-3 px-4 rounded-xl border-2 border-gray-200">
            <p className="font-semibold">Add to your post</p>
            <div className="flex space-x-4 cursor-pointer">
              <input
                ref={input}
                name="photos"
                multiple
                type="file"
                onChange={onChangeFile}
                className="relative hidden"
              ></input>
              <Image
                onClick={showFileChooser}
                src={`/addpost/photos.png`}
                alt="User"
                width={0}
                height={0}
                sizes="100vh"
                className="w-8 h-8 cursor-pointer"
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
