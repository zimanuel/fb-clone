import PostContent from "../common/content";
import Medias from "../common/medias";
import Header from "../pagepost/header";

export default function SharedPagePost() {
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
