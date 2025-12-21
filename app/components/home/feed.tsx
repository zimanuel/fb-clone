import { Suspense } from "react";
import StorySkeleton from "./skeletons/story";

import Stories from "./story/stories";

import AddPost from "./addpost/addpost";
import FeedsClient from "./feedclient";

export default function Feed() {
  return (
    <div className="md:w-[53%] md:ml-[23.5%] md:mr-[23.5%] mr-0 ml-0 w-full grow pl-10 py-20">
      <AddPost />
      <Suspense fallback={<StorySkeleton />}>
        <Stories />
      </Suspense>
      <FeedsClient />
    </div>
  );
}
