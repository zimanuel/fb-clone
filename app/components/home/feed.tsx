import { Suspense } from "react";
import StorySkeleton from "./skeletons/story";
import OriginalUserPost from "./post/userpost/post";
import OriginalPagePost from "./post/pagepost/post";
import Stories from "./story/stories";
import UserSharePost from "./post/usersharepost/post";
import PageSharePost from "./post/pagesharepost/post";
import OriginalGroupPost from "./post/grouppost/post";
import ToGroupSharePost from "./post/togroupsharepost/post";
import AddPost from "./addpost/addpost";
import PostModal from "./postmodal/postmodal";

export default async function Feed() {
  return (
    <div className="md:w-[53%] md:ml-[23.5%] md:mr-[23.5%] mr-0 ml-0 w-full grow pl-10 py-20">
      <AddPost />
      <Suspense fallback={<StorySkeleton />}>
        <Stories />
      </Suspense>

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
      {/* <PostModal /> */}
    </div>
  );
}
