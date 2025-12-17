"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { stories } from "@/app/seed/faker/story";
import Image from "next/image";

export default function Stories({}: {
  stories: {
    user: string;
    pic: string;
  }[];
}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
      {stories.map((story, index) => (
        <div className="max-w-30 h-52  py-0 px-[0.2rem]" key={index}>
          <Image
            src={story.pic}
            width={0}
            height={0}
            sizes="100hv"
            alt="story"
            className="w-full h-full rounded-lg object-cover border border-zinc-200 shadow-sm"
          />
        </div>
      ))}
    </Slider>
  );
}
