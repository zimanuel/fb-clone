export default function GridFive() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-1/2 flex space-x-1">
        {Array.from({ length: 2 }, (el, index) => {
          return (
            <div
              key={index}
              className="w-full h-full"
              style={{
                backgroundImage: "url(" + `/users/${index + 3}.jpg` + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          );
        })}
      </div>

      <div className="w-full h-1/2 flex space-x-1 mt-1">
        {Array.from({ length: 3 }, (el, index) => {
          return (
            <div
              key={index}
              className="w-full h-full"
              style={{
                backgroundImage: "url(" + `/users/${index + 1}.jpg` + ")",
                backgroundPosition: "center",
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
