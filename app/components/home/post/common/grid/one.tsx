import Image from "next/image";
export default function GridOne({ type }: { type: "share" | "original" }) {
  return (
    <div
      className={`w-full h-full ${
        type === "share" ? " rounded-tl-xl rounded-tr-xl" : ""
      }`}
    >
      <Image
        src={`/users/3.jpg`}
        alt="user"
        width={0}
        height={0}
        sizes="100vh"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
