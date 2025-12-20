export default function GridOne({
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
    <div
      className={`w-full h-full ${
        type === "share" ? " rounded-tl-xl rounded-tr-xl" : ""
      }`}
      style={{
        backgroundImage: "url(" + `${medias[0].url}` + ")",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
