"use client";
import { useState } from "react";

export default function GridMore() {
  const [random] = useState<number>(1);
  if (random === 1) {
    return (
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
            if (index === 2) {
              return (
                <div
                  key={index}
                  className="w-full h-full relative flex items-center justify-center"
                  style={{
                    backgroundImage: "url(" + `/users/${index + 1}.jpg` + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <p className="absolute bg-white z-10 ">3+ Moreffffff</p>
                </div>
              );
            }

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
      </div>
    );
  }

  return (
    <div className="w-full h-full flex space-x-1">
      <div className="w-[60%] h-full flex flex-col space-y-1">
        {Array.from({ length: 2 }, (el, index) => {
          return (
            <div
              key={index}
              className="w-full h-1/2"
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
      <div className="w-[40%] h-full flex flex-col space-y-1">
        <div
          className="h-1/3 w-full"
          style={{
            backgroundImage: "url(" + `/users/12.jpg` + ")",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-1/3 w-full"
          style={{
            backgroundImage: "url(" + `/users/4.jpg` + ")",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="h-1/3 w-full"
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
