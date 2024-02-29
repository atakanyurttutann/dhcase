"use client";
import { BasketIcon } from "@/icons";
import { useAppSelector } from "@/store/store";
import React from "react";

const BasketCard = () => {
  const { basket } = useAppSelector((state) => state.basket);
  return (
    <div>
      <div className=" fixed h-screen  right-0 top-0 z-[2000]">
        <div className=" flex justify-center items-center h-full relative">
          <div className=" w-[50px] h-[50px]  bg-blue-600 rounded-l-[15px] p-2 ">
            <BasketIcon />
          </div>
          <div className=" absolute  flex  justify-center items-center h-screen top-[-12px] right-[-2px]">
            <div className=" w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-white">
              {basket.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
