"use client";

import Link from "next/link";
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
        <Link href={`/photo`} className="w-[60%] h-full block">
          <div
            className={`w-full h-full ${
              type === "share" ? "rounded-tl-xl" : ""
            }`}
            style={{
              backgroundImage: "url(" + `${medias[0].url}` + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Link>
        <div className="w-[40%] h-full flex flex-col space-y-1">
          {medias.slice(1, medias.length).map((media, index) => {
            return (
              <Link
                href={`/photo`}
                className="w-full h-1/2 block"
                key={media.id}
              >
                <div
                  className={`h-full grow ${
                    type === "share" && index === 0 ? "rounded-tr-xl" : ""
                  }`}
                  style={{
                    backgroundImage: "url(" + `${media.url}` + ")",
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col space-y-1">
      <Link href={`/photo`} className="w-full h-1/2 block">
        <div
          className={`h-full w-full ${
            type === "share" ? "rounded-tl-xl rounded-tr-xl" : ""
          }`}
          style={{
            backgroundImage: "url(" + `${medias[0].url}` + ")",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Link>
      <div className="h-1/2 w-full flex space-x-1">
        {medias.slice(1, medias.length).map((media) => {
          return (
            <Link
              href={`/photo`}
              className="w-full h-full block"
              key={media.id}
            >
              <div
                className={`h-full grow`}
                style={{
                  backgroundImage: "url(" + `${media.url}` + ")",
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
