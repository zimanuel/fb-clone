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
  return (
    <div className="w-full h-full flex space-x-1">
      {medias.map((media) => {
        return (
          <div
            key={media.id}
            className={`w-1/2 h-full ${
              type === "share" ? "rounded-tl-xl" : ""
            }`}
            style={{
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
