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
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
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

      <Slider {...settings} ref={sliderRef}>
        {stories.map((story, index) => (
          <div
            className="max-w-30 h-52  py-0 px-[0.2rem] relative bg-white"
            key={index}
          >
            <Image
              src={story.pic}
              width={0}
              height={0}
              sizes="100hv"
              alt="story"
              className="w-10 h-10 rounded-full object-cover absolute top-3 left-3 z-20 border-4 border-blue-600"
            />
            <p className=" text-white text-sm  absolute bottom-3 left-3 z-20">
              {story.user}
            </p>
            <div className="w-full h-full relative">
              <Image
                src={story.pic}
                width={0}
                height={0}
                sizes="100hv"
                alt="story"
                className=" w-full h-full rounded-lg object-cover border"
              />
              <div className="rounded-lg absolute top-0 left-0 right-0 bottom-0 bg-black/50 mask-t-from-5%"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
