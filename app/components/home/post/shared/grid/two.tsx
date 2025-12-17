export default function GridTwo() {
  return (
    <div className="w-full h-full flex space-x-1">
      <div
        className="w-1/2 h-full"
        style={{
          backgroundImage: "url(" + `/users/6.jpg` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        className="w-1/2 h-full"
        style={{
          backgroundImage: "url(" + `/users/8.jpg` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
