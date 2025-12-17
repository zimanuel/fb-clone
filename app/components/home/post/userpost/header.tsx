import Image from "next/image";
export default function Header() {
  return (
    <div className="flex space-x-3 p-3">
      <Image
        src={`/users/4.jpg`}
        alt="Amanuel Fered"
        width={0}
        height={0}
        sizes="100vh"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col space-y-1">
        <p className="font-semibold">Amanuel Fered</p>
        <p>3hrs</p>
      </div>
    </div>
  );
}
