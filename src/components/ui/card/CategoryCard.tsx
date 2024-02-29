"use client";

import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftArrow, RightArrow } from "@/icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CategoryCard = () => {
  return (
    <>
      <div className=" flex w-full   justify-end mb-4 gap-[10px]">
        <div className=" bg-gray-400 flex justify-center items-center w-[40px]  h-[40px] rounded-full  cursor-pointer showcase-left-category">
          <LeftArrow />
        </div>

        <div className=" bg-gray-400 flex justify-center items-center w-[40px]  h-[40px] rounded-full  cursor-pointer showcase-right-category">
          <RightArrow />
        </div>
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
          nextEl: ".showcase-right-category",
          prevEl: ".showcase-left-category",
        }}
      >
        {categoryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => {
                setSelectCategory(item.id);
                setPage(3);
              }}
              className={`lg:w-[200px]    py-2 flex justify-center items-center   bg-[#EBF2F5] transition-all rounded pcard cursor-pointer text-[13px] font-semibold text-[#3A4759] #${
                selectCategory == item.id ? "  bg-blue-500 !text-white" : ""
              }`}
            >
              {item.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategoryCard;
