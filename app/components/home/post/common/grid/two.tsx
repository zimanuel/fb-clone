export default function GridTwo({ type }: { type: "share" | "original" }) {
  return (
    <div className="w-full h-full flex space-x-1">
      {Array.from({ length: 2 }, (el, index) => {
        return (
          <div
            key={index}
            className={`h-1/2 w-full ${
              type === "share" && index === 0
                ? "rounded-tl-xl"
                : "rounded-tr-xl"
            }`}
            style={{
              backgroundImage: "url(" + `/users/${index + 1}.jpg` + ")",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        );
      })}
    </div>
  );
}
