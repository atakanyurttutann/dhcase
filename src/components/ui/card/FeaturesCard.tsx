import { LeftArrow, RightArrow } from "@/icons";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { features } from "@/data/data";
const FeaturesCard = () => {
  return (
    <div className=" mt-3 p-[12px] bg-[#946bd6] rounded-lg flex items-center">
      <div className="showcase-left-features mr-2 cursor-pointer">
        <LeftArrow />{" "}
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        breakpoints={{
          720: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 5,
          },
          1700: {
            slidesPerView: 5,
          },
        }}
        navigation={{
          nextEl: ".showcase-right-features",
          prevEl: ".showcase-left-features",
        }}
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" bg-[#7656ac]  w-full  py-4 rounded flex justify-center text-center items-center">
              <div className=" text-white text-[12px] text-center">
                <div className=" font-bold">{item.featuresTitle}</div>
                <p>{item.featuresDes}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="showcase-right-features ml-2 cursor-pointer">
        <RightArrow />{" "}
      </div>
    </div>
  );
};

export default FeaturesCard;
