import { Suspense } from "react";
import StorySkeleton from "./skeletons/story";
import OriginalUserPost from "./post/userpost/original";
import OriginalPagePost from "./post/pagepost/original";
import Stories from "./story/stories";

export default async function Feed() {
  return (
    <div className="md:w-[55%] md:ml-[22.5%] md:mr-[22.5%] mr-0 ml-0 w-full grow pl-10 py-20">
      <Suspense fallback={<StorySkeleton />}>
        <Stories />
      </Suspense>
      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <OriginalUserPost />
      </div>

      <div className="mt-3  bg-white rounded-2xl shadow-lg">
        <OriginalPagePost />
      </div>
    </div>
  );
}
