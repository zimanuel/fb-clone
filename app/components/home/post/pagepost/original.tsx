import PostContent from "../shared/content";
import Medias from "../shared/medias";
import Footer from "./footer";
import Header from "./header";

export default function OriginalPagePost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <div className="h-128">
        <Medias />
      </div>
      <Footer />
    </div>
  );
}
