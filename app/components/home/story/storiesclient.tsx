"use client";

import Slider from "react-slick";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useRef } from "react";
export default function StoriesClient({
  stories,
}: {
  stories: {
    user: string;
    pic: string;
  }[];
}) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
  };

  const handelNext = () => {
    sliderRef?.current?.slickNext();
  };

  const handelPrev = () => {
    sliderRef?.current?.slickPrev();
  };
  return (
    <div className="relative">
      <MdNavigateNext
        onClick={handelNext}
        className="w-12 h-12 text-gray-400 flex items-center justify-center absolute top-1/2 right-4 z-10 bg-white outline outline-gray-500 cursor-pointer rounded-full p-2  hover:fill-200  transition duration-300 ease-out "
      />
      <MdNavigateBefore
        onClick={handelPrev}
        className="w-12 h-12 text-gray-400 flex items-center justify-center absolute top-1/2 left-4 z-10 bg-white outline outline-gray-500 cursor-pointer rounded-full p-2 hover:fill-200  transition duration-300 ease-out"
      />

      {stories.length > 0 && (
        <Slider {...settings} ref={sliderRef}>
          {stories.map((story, index) => (
            <div
              className="max-w-30 h-52  py-0 mx-[0.26rem] relative rounded-xl"
              key={index}
            >
              <div className=" w-10 h-10 rounded-full border-4 border-blue-600 top-3 left-3 z-20 absolute">
                <Image
                  src={story.pic}
                  width={0}
                  height={0}
                  sizes="100hv"
                  alt="story"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className=" text-white text-sm  absolute bottom-3 left-3 z-20">
                {story.user}
              </p>
              <div className="max-w-30 h-52 relative">
                <Image
                  src={story.pic}
                  width={0}
                  height={0}
                  sizes="100hv"
                  alt="story"
                  className=" max-w-30 h-52 rounded-xl object-cover"
                />
                <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-black/50 mask-t-from-5%"></div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
