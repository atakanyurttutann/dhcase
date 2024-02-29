"use client";
import { BasketIcon } from "@/icons";
import { clearBasket } from "@/store/slice/basketSlice";
import { dispatch, useAppSelector } from "@/store/store";

const BasketCard = () => {
  const { basket } = useAppSelector((state) => state.basket);
  return (
    <div>
      <div className=" fixed h-screen  right-0 top-0 z-[2000]">
        <div className=" flex justify-center items-center h-full relative">
          <div
            onClick={() => {
              dispatch(clearBasket());
            }}
            className=" w-[50px] h-[50px]  bg-blue-600 rounded-l-[15px] p-2 relative "
          >
            <BasketIcon />
            <div className=" absolute  flex  justify-center items-center  top-[-10px] right-[-2px]">
              <div className=" w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-white">
                {basket.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
