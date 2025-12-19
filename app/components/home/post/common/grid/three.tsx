export default function GridThree({ type }: { type: "share" | "original" }) {
  return (
    <div className="w-full h-full flex space-x-1">
      <div
        className={`w-[60%] h-full ${type === "share" ? "rounded-tl-xl" : ""}`}
        style={{
          backgroundImage: "url(" + `/users/6.jpg` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[40%] h-full flex flex-col space-y-1">
        {Array.from({ length: 3 }, (el, index) => {
          return (
            <div
              key={index}
              className={`h-1/2 w-full ${
                type === "share" && index === 0 ? "rounded-tr-xl" : ""
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
    </div>
  );
}
