import PostContent from "../shared/content";
import Medias from "../shared/medias";
import Header from "./header";

export default function OriginalPost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <div className="h-128">
        <Medias />
      </div>
    </div>
  );
}
