import Contacts from "./components/home/contacts";
import Feed from "./components/home/feed";
import SideBar from "./components/home/sidebar";
export default function Home() {
  return (
    <div className="  font-sans min-h-screen flex space-x-20 bg-zinc-50">
      <SideBar />
      <Feed />
      <Contacts />
    </div>
  );
}
