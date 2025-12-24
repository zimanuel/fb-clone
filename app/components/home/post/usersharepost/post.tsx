import PostContent from "../common/content";
import Footer from "../common/footer";
import SharedUserPost from "../shared/userpost";
import Header from "./header";

export default function UserSharePost() {
  return (
    <div className="w-full">
      <Header />
      <PostContent />
      <SharedUserPost />
      <Footer />
    </div>
  );
}
