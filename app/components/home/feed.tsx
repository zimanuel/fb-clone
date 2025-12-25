import { Suspense } from "react";
import StorySkeleton from "./skeletons/story";

import Stories from "./story/stories";

import AddPost from "./addpost/addpost";
import FeedsClient from "./feedclient";

export default function Feed() {
  return (
    <div className="md:w-[50%]   md:ml-[24.5%] md:mr-[25.5%] mr-0 ml-0 w-full pt-18 mb-3">
      <AddPost />
      <Suspense fallback={<StorySkeleton />}>
        <Stories />
      </Suspense>
      <FeedsClient />
    </div>
  );
}
