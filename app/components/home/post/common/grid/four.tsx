import { useState } from "react";

export default function GridFour({ type }: { type: "share" | "original" }) {
  const [random] = useState<number>(1);

  if (random === 1) {
    return (
      <div className="w-full h-full">
        <div className="w-full  h-1/2 flex space-x-1">
          {Array.from({ length: 2 }, (el, index) => {
            return (
              <div
                className={`w-full h-full ${
                  index === 0 && type === "share" ? "rounded-tl-xl" : ""
                }`}
                key={index}
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
        <div className="w-full  h-1/2 flex space-x-1 mt-1">
          {Array.from({ length: 3 }, (el, index) => {
            return (
              <div
                className="w-1/2 h-full"
                key={index}
                style={{
                  backgroundImage: "url(" + `/users/${index + 2}.jpg` + ")",
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

  return (
    <div className="w-full h-full flex space-x-1">
      <div
        className={`w-[60%] h-full ${type === "share" ? "rounded-tl-xl" : ""}`}
        style={{
          backgroundImage: "url(" + `/users/16.jpg` + ")",
          backgroundPosition: "top center",
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
                backgroundImage: "url(" + `/users/${index + 20}.jpg` + ")",
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
