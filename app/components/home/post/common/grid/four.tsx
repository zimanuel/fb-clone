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
  const [random] = useState<number>(1);

  if (random === 1) {
    return (
      <div className="w-full h-full flex space-x-1">
        <div className="w-[60%]  h-full">
          <div
            className={`w-full h-full rounded-tl-xl`}
            style={{
              backgroundImage: "url(" + `${medias[0].url}` + ")",
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-[40%]  h-full flex flex-col space-y-1">
          {medias.slice(1, medias.length).map((media, index) => {
            return (
              <div
                className={`w-full grow ${
                  type === "share" && index === 0 ? "rounded-tr-xl" : ""
                }`}
                key={media.id}
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
      <div className="h-1/2 w-full flex space-x-1">
        {medias.slice(0, 2).map((media, index) => {
          return (
            <div
              key={media.id}
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
          );
        })}
      </div>

      <div className="w-full h-1/2 flex space-x-1">
        {medias.slice(2, medias.length).map((media) => {
          return (
            <div
              key={media.id}
              className={`w-full h-full`}
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
