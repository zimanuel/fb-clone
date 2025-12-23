import { medias } from "@/app/seed/faker/medias";
import PostContent from "../common/content";
import Medias from "../common/medias";
import Footer from "./footer";
import Header from "./header";

export default function OriginalUserPost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <div className="h-128 mt-2">
        <Medias type="original" medias={medias} />
      </div>
      <Footer />
    </div>
  );
}
