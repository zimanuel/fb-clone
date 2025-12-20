import { medias } from "@/app/seed/faker/medias";
import PostContent from "../common/content";
import Medias from "../common/medias";
import Header from "../grouppost/header";

export default function SharedPagePost() {
  return (
    <div className="w-full p-3">
      <div className="border border-gray-300 rounded-xl">
        <div className="h-128 rounded-xl">
          <Medias type="share" medias={medias} />
        </div>
        <Header />
        <PostContent />
      </div>
    </div>
  );
}
