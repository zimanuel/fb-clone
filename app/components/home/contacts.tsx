import { users } from "@/app/seed/faker/user";
import Image from "next/image";
export default function Contacts() {
  return (
    <div className="md:w-[22.5%] w-full pt-12  h-full fixed top-0 right-0 bottom-0 z-30 bg-zinc-100 opacity-35">
      <div className="overflow-y-auto pt-8 pb-12 pl-5   h-full ">
        {users.slice(0, 10).map((user, index) => (
          <div className="flex px-2 py-1.5 space-x-3 items-center" key={index}>
            <Image
              src={user.pic}
              width={0}
              height={0}
              sizes="100hv"
              alt="story"
              className="w-10 h-10 rounded-full object-cover border border-zinc-200 shadow-sm"
            />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
