import { medias } from "@/app/seed/faker/medias";
import PostContent from "../common/content";
import Medias from "../common/medias";
import Header from "./header";
import Footer from "../common/footer";

export default function OriginalPagePost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <div className="h-screen mt-2">
        <Medias type="original" medias={medias} />
      </div>
      <Footer />
    </div>
  );
}
