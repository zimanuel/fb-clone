import { sideBarData } from "@/app/seed/faker/sidebar";
import Image from "next/image";
export default function SideBar() {
  return (
    <div className="md:w-[22.5%] w-full pt-12  h-full fixed top-0 left-0 bottom-0 z-30 ">
      <div className="overflow-y-auto pt-8 pb-12 pl-5   h-full">
        {sideBarData.map((data, index) => (
          <div
            key={index}
            className="hover:bg-zinc-200 p-2 flex items-center space-x-2 rounded-tl-lg rounded-bl-lg"
          >
            <Image alt="Facebook" src={data.image} width={39} height={39} />

            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
