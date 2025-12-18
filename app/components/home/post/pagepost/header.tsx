import Image from "next/image";
export default function Header() {
  return (
    <div className="flex space-x-1 pl-2.5 pt-2.5">
      <Image
        src={`/users/4.jpg`}
        alt="Amanuel Fered"
        width={0}
        height={0}
        sizes="100vh"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="font-semibold">Ethiopian Artists</p>
        <p>3hrs</p>
      </div>
    </div>
  );
}
