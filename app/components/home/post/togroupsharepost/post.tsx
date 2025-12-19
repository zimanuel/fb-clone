import PostContent from "../common/content";
import SharedUserPost from "../shared/userpost";
import Footer from "./footer";
import Header from "./header";

export default function ToGroupSharePost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <SharedUserPost />
      <Footer />
    </div>
  );
}
