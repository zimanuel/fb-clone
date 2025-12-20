"use client";

import { useState } from "react";

export default function GridThree({
  type,
  medias,
}: {
  type?: "share" | "original";
  medias: {
    id: number;
    url: string;
    type: string;
  }[];
}) {
  const [random] = useState<number>(0);

  if (random === 0) {
    return (
      <div className="w-full h-full flex space-x-1">
        <div
          className={`w-[60%] h-full ${
            type === "share" ? "rounded-tl-xl" : ""
          }`}
          style={{
            backgroundImage: "url(" + `${medias[0].url}` + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="w-[40%] h-full flex flex-col space-y-1">
          {medias.slice(1, medias.length).map((media, index) => {
            return (
              <div
                key={media.id}
                className={`h-1/2 grow ${
                  type === "share" && index === 0 ? "rounded-tr-xl" : ""
                }`}
                style={{
                  backgroundImage: "url(" + `${media.url}` + ")",
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
    <div className="w-full h-full flex flex-col space-y-1">
      <div
        className={`h-1/2 w-full ${
          type === "share" ? "rounded-tl-xl rounded-tr-xl" : ""
        }`}
        style={{
          backgroundImage: "url(" + `${medias[0].url}` + ")",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="h-1/2 w-full flex space-x-1">
        {medias.slice(1, medias.length).map((media) => {
          return (
            <div
              key={media.id}
              className={`h-full grow`}
              style={{
                backgroundImage: "url(" + `${media.url}` + ")",
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
