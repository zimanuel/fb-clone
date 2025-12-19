import Image from "next/image";
export default function GridTwo({ type }: { type: "share" | "original" }) {
  return (
    <div className="w-full h-auto flex space-x-1">
      {Array.from({ length: 2 }, (el, index) => {
        return (
          <div
            key={index}
            className={`h-1/2 w-full ${
              type === "share" && index === 0
                ? "rounded-tl-xl"
                : "rounded-tr-xl"
            }`}
          >
            <Image
              src={`/users/${index + 2}.jpg`}
              alt="user"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
