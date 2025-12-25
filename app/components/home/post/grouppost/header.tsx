import Image from "next/image";
export default function Header() {
  return (
    <div className="flex space-x-2 pl-2.5 pt-2.5 mb-1.5">
      <div className=" w-12 h-12 relative rounded-lg bg-amber-200">
        <Image
          src={`/users/19.jpg`}
          alt="Amanuel Fered"
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-full brightness-80 rounded-lg object-cover"
        />
        <Image
          src={`/users/14.jpg`}
          alt="Amanuel Fered"
          width={0}
          height={0}
          sizes="100vh"
          className="absolute -right-1 -bottom-1 w-7 h-7 rounded-full object-cover border border-white"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[0.99rem] font-semibold">React Developers</p>
        <div className="flex space-x-1">
          <p className=" text-zinc-400 text-[0.96rem] font-semibold">
            Amanuel Ferede
          </p>
          <p className=" text-zinc-500 text-[0.96rem] font-semibold">
            December 16 at 9:40 PM
          </p>
        </div>
      </div>
    </div>
  );
}
