"use client";

import { useAppSelector } from "@/app/store/hooks";
import OriginalGroupPost from "./post/grouppost/post";
import OriginalPagePost from "./post/pagepost/post";
import PageSharePost from "./post/pagesharepost/post";
import ToGroupSharePost from "./post/togroupsharepost/post";
import OriginalUserPost from "./post/userpost/post";
import UserSharePost from "./post/usersharepost/post";
import PostModal from "./postmodal/postmodal";

export default function FeedsClient() {
  const isAddPostModalOpened = useAppSelector((state) => state.addPost.isOpen);
  return (
    <>
      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <OriginalUserPost />
      </div>

      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <OriginalPagePost />
      </div>

      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <OriginalGroupPost />
      </div>

      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <UserSharePost />
      </div>

      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <PageSharePost />
      </div>

      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <ToGroupSharePost />
      </div>
      {isAddPostModalOpened && <PostModal />}
    </>
  );
}
