import Link from "next/link";
import { useState } from "react";

export default function GridFour({
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
        <div className="w-[60%]  h-full">
          <Link href={`/photo`} className="w-full h-full">
            <div
              className={`w-full h-full grow ${
                type === "share" ? "rounded-tl-xl" : ""
              }`}
              style={{
                backgroundImage: "url(" + `${medias[0].url}` + ")",
                backgroundPosition: "top center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
        </div>
        <div className="w-[40%]  h-full flex flex-col space-y-1">
          {medias.slice(1, medias.length).map((media, index) => {
            return (
              <Link href={`/photo`} className="w-full grow" key={media.id}>
                <div
                  className={`w-full h-full ${
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
      <div className="h-1/2 w-full flex space-x-1">
        {medias.slice(0, 2).map((media, index) => {
          return (
            <Link href={`/photo`} className="h-full w-full" key={media.id}>
              <div
                className={`w-full h-full ${
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
        {medias.slice(2, medias.length).map((media) => {
          return (
            <Link href={`/photo`} className="w-full h-full" key={media.id}>
              <div
                className={`w-full h-full`}
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
