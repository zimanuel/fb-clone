"use client";
import Link from "next/link";
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
  const [random] = useState<number>(0);

  if (random === 1) {
    return (
      <div className="w-full h-full flex space-x-1">
        {medias.map((media) => {
          return (
            <Link className="w-1/2 h-full" href={`/photo`} key={media.id}>
              <div
                className={`w-full h-full ${
                  type === "share" ? "rounded-tl-xl" : "rounded-tr-xl"
                }`}
                style={{
                  backgroundPosition: "top center",
                  backgroundImage: "url(" + `${media.url}` + ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col space-y-1">
      {medias.map((media) => {
        return (
          <Link className="h-1/2 w-full" href={`/photo`} key={media.id}>
            <div
              className={`h-full w-full ${
                type === "share" ? "rounded-tl-xl" : "rounded-tr-xl"
              }`}
              style={{
                backgroundPosition: "top center",

                backgroundImage: "url(" + `${media.url}` + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
        );
      })}
    </div>
  );
}
