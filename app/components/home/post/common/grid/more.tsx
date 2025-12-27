"use client";
import Link from "next/link";
import { useState } from "react";

export default function GridMore({
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
      <div className="w-full h-full flex flex-col space-y-1">
        <div className="w-full h-1/2 flex space-x-1 mt-1">
          {medias.slice(0, 2).map((media, index) => {
            return (
              <Link href={`/photo`} className="w-full h-full" key={media.id}>
                <div
                  className={`h-full grow ${
                    type === "share" && index === 0
                      ? "rounded-tl-xl"
                      : "rounded-tr-xl"
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

        <div className="w-full h-1/2 flex space-x-1">
          {medias.slice(2, 5).map((media, index) => {
            return (
              <Link
                href={`/photo`}
                className="w-full h-full relative"
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
                >
                  {index === 2 && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center bg-black/50">
                      <p className="text-4xl font-semibold text-white">
                        {medias.length - 5}+
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex space-x-1 rounded-xl">
      <div className="w-1/2 h-full flex flex-col space-y-1">
        {medias.slice(0, 2).map((media, index) => {
          return (
            <Link href={`/photo`} className="w-full grow" key={media.id}>
              <div
                className={`h-full  grow ${
                  type === "share" && index === 0
                    ? "rounded-tl-xl"
                    : "rounded-tr-xl"
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

      <div className="w-1/2 h-full flex flex-col space-y-1">
        {medias.slice(2, 5).map((media, index) => {
          return (
            <Link
              href={`/photo`}
              className="w-full grow relative"
              key={media.id}
            >
              <div
                className={`h-full w-full ${
                  type === "share" && index === 0 ? "rounded-tr-xl" : ""
                }`}
                style={{
                  backgroundImage: "url(" + `${media.url}` + ")",
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {index === 2 && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center bg-black/50">
                    <p className="text-4xl font-semibold text-white">
                      {medias.length - 5}+
                    </p>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
