import Contacts from "./components/home/contacts/contacts";
import Feed from "./components/home/feed";
import TopBar from "./components/home/navbar";
import SideBar from "./components/home/sidebar";
export default function Home() {
  return (
    <>
      <TopBar />
      <div className="  font-sans min-h-screen flex space-x-20 bg-gray-100">
        <SideBar />
        <Feed />
        <Contacts />
      </div>
    </>
  );
}
