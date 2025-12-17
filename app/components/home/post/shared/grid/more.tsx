export default function GridMore() {
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
          if (index === 2) {
            return (
              <div
                key={index}
                className="w-full h-full relative flex items-center justify-center"
                style={{
                  backgroundImage: "url(" + `/users/${index + 1}.jpg` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p className="absolute bg-white z-10 ">3+ Moreffffff</p>
              </div>
            );
          }

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
