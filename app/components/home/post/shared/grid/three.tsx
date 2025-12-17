export default function GridThree() {
  return (
    <div className="w-full h-full flex space-x-1">
      <div
        className="w-[60%] h-full"
        style={{
          backgroundImage: "url(" + `/users/6.jpg` + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[40%] h-full flex flex-col space-y-1">
        <div
          className="h-1/2 w-full"
          style={{
            backgroundImage: "url(" + `/users/12.jpg` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="h-1/2 w-full"
          style={{
            backgroundImage: "url(" + `/users/4.jpg` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
