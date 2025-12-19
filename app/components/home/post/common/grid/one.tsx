export default function GridOne({ type }: { type: "share" | "original" }) {
  return (
    <div
      className={`w-full h-full ${
        type === "share" ? " rounded-tl-xl rounded-tr-xl" : ""
      }`}
      style={{
        backgroundImage: "url(" + `/users/6.jpg` + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
