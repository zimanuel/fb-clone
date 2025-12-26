"use client";

import { useAppSelector } from "@/app/store/hooks";
import OriginalGroupPost from "./post/grouppost/post";
import OriginalPagePost from "./post/pagepost/post";
import PageSharePost from "./post/pagesharepost/post";
import ToGroupSharePost from "./post/togroupsharepost/post";
import OriginalUserPost from "./post/userpost/post";
import UserSharePost from "./post/usersharepost/post";
import PostModal from "./postmodal/postmodal";
import ReactionModal from "./reactionsmodal/reactionsmodal";

export default function FeedsClient() {
  const isAddPostModalOpened = useAppSelector((state) => state.addPost.isOpen);
  return (
    <>
      <div className="mt-3  bg-white md:rounded-xl shadow-sm">
        <OriginalUserPost />
      </div>

      <div className="mt-3  bg-white md:rounded-xl shadow-sm">
        <OriginalPagePost />
      </div>

      <div className="mt-3  bg-white md:rounded-xl shadow-sm">
        <OriginalGroupPost />
      </div>

      <div className="mt-3  bg-white md:rounded-xl shadow-sm">
        <UserSharePost />
      </div>

      <div className="mt-3  bg-white md:rounded-xl shadow-sm">
        <PageSharePost />
      </div>

      <div className="mt-3  bg-white md:rounded-xl shadow-sm">
        <ToGroupSharePost />
      </div>
      {isAddPostModalOpened && <PostModal />}
      {/* <CommentModal /> */}
      <ReactionModal />
    </>
  );
}
