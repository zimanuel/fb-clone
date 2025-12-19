import PostContent from "../common/content";
import Medias from "../common/medias";
import Header from "../userpost/header";

export default function SharedUserPost() {
  return (
    <div className="w-full p-3">
      <div className="border border-gray-300 rounded-xl">
        <div className="h-128 rounded-xl">
          <Medias type="share" />
        </div>
        <Header />
        <PostContent />
      </div>
    </div>
  );
}
