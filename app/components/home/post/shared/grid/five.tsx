"use client";
import { useState } from "react";

export default function GridFive() {
  const [random] = useState<number>(0);

  if (random === 0) {
    <div className="w-full h-full">
      <div className="w-full h-1/2 flex space-x-1">
        {Array.from({ length: 2 }, (el, index) => {
          return (
            <div
              key={index}
              className="w-full h-full"
              style={{
                backgroundImage: "url(" + `/users/${index + 3}.jpg` + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          );
        })}
      </div>

      <div className="w-full h-1/2 flex space-x-1 mt-1">
        {Array.from({ length: 3 }, (el, index) => {
          return (
            <div
              key={index}
              className="w-full h-full"
              style={{
                backgroundImage: "url(" + `/users/${index + 1}.jpg` + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          );
        })}
      </div>
    </div>;
  }

  return (
    <div className="w-full h-full flex space-x-1">
      <div
        className="w-[60%] h-full"
        style={{
          backgroundImage: "url(" + `/users/6.jpg` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[40%] h-full flex flex-col space-y-1">
        <div
          className="h-1/2 w-full"
          style={{
            backgroundImage: "url(" + `/users/12.jpg` + ")",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-1/2 w-full"
          style={{
            backgroundImage: "url(" + `/users/4.jpg` + ")",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="h-1/2 w-full"
          style={{
            backgroundImage: "url(" + `/users/9.jpg` + ")",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
