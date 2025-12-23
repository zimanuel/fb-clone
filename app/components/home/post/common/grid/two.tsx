"use client";
import { useState } from "react";

export default function GridTwo({
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
  const [random] = useState<number>(1);

  if (random === 1) {
    return (
      <div className="w-full h-full flex space-x-1">
        {medias.map((media) => {
          return (
            <div
              key={media.id}
              className={`w-1/2 h-full ${
                type === "share" ? "rounded-tl-xl" : "rounded-tr-xl"
              }`}
              style={{
                backgroundPosition: "top center",
                backgroundImage: "url(" + `${media.url}` + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col space-y-1">
      {medias.map((media) => {
        return (
          <div
            key={media.id}
            className={`h-1/2 w-full ${
              type === "share" ? "rounded-tl-xl" : "rounded-tr-xl"
            }`}
            style={{
              backgroundPosition: "top center",

              backgroundImage: "url(" + `${media.url}` + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        );
      })}
    </div>
  );
}
