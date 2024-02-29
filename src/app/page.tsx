"use client";
import { dispatch } from "@/store/store";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { categoryData, packageData } from "@/data/data";
import { LeftArrow, RightArrow } from "@/icons";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/ui/buttons/CustomButton";
import { addBasket } from "@/store/slice/basketSlice";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ui/card/ProductCard";

export default function Home() {
  const [selectCategory, setSelectCategory] = useState<number>(1);
  const [page, setPage] = useState<number>(3);
  const router = useRouter();

  return (
    <main className=" custom-container">
      <div className="  mt-[100px]">
        <h1 className=" text-[#0b6ab2] font-bold text-[36px] mb-[10px] ">Paketlerimiz</h1>

        <div className=" flex w-full   justify-end mb-4 gap-[10px]">
          <div className=" bg-gray-400 flex justify-center items-center w-[40px]  h-[40px] rounded-full  cursor-pointer showcase-left-category">
            <LeftArrow />
          </div>

          <div className=" bg-gray-400 flex z-[3000] justify-center items-center w-[40px]  h-[40px] rounded-full  cursor-pointer showcase-right-category">
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
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-[20px] gap-y-[45px] mt-14">
        {packageData
          .filter((q) => q.categoryId == selectCategory)
          .slice(0, page)
          .map((item, index) => (
            <ProductCard item={item} key={item.id} />
          ))}
      </div>

      {packageData.filter((q) => q.categoryId == selectCategory).length > page && (
        <CustomButton
          className=" mt-20  mx-auto  mb-20  !border-[#0b6ab2] border py-3 px-6 !bg-white !text-[#0b6ab2]"
          onClick={() => {
            setPage(page + 3);
          }}
        >
          Daha Fazla Göster
        </CustomButton>
      )}
    </main>
  );
}
