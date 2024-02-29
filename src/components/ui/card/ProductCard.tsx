import React from "react";
import CustomButton from "../buttons/CustomButton";
import { addBasket } from "@/store/slice/basketSlice";
import { dispatch } from "@/store/store";
import { IPackage } from "@/data/data";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IProps {
  item: IPackage;
}
const ProductCard = ({ item }: IProps) => {
  const router = useRouter();

  return (
    <div className=" shadow-lg hover:shadow-none rounded-lg  cursor-pointer  h-[600px] duration-500 hover:translate-y-[-50px]  relative packageCard  transition-all justify-between flex flex-col  ">
      <div
        onClick={() => {
          router.push("/detail/" + item.id);
        }}
        className=" absolute w-full h-[660px] top-0 left-0 shadow-lg  rounded-lg  z-50  topCard opacity-0"
      >
        {" "}
      </div>

      <div>
        <div className=" relative w-full h-[300px]  ">
          <Image src={item.image} fill alt={item.name} className="  rounded-lg" />
        </div>

        <div className=" px-3">
          <div className=" mt-2 font-bold  text-[16px]">{item.name} </div>
          <div className=" mt-2   px-4">
            {item.detail.map((detailItem, detailIndex) => (
              <ul key={detailIndex} className="list-disc">
                <li className=" text-sm text-gray-700">{detailItem.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className=" p-3">
        <div className=" flex gap-[10px]  items-center">
          <div className="  text-blue-600 text-[25px]   font-bold ">
            {item.discountedPrice} {" TL"}
          </div>
          <div className="  text-red-600 text-[14px]   font-bold line-through ">
            {item.price} {" TL"}
          </div>
        </div>
        <div className="  mt-1  text-[12px]  text-green-400">
          Peşin Fiyatına Vade Farksız{" "}
          <span className="  font-bold">Ayda {item.installment} TL</span> Taksite
        </div>
        <div className=" absolute bg-w bottom-[-50px] left-0 w-full opacity-0 packageCardButton z-[1001]  transition-all duration-500  ">
          <div className="   grid-cols-2 grid gap-3  px-2 ">
            <CustomButton
              onClick={() => {
                router.push("/detail/" + item.id);
              }}
              className={`!text-[#0b6ab2] !bg-white !py-1 border `}
            >
              İncele
            </CustomButton>
            <CustomButton
              onClick={() => {
                dispatch(addBasket({ name: item.name, id: item.id }));
              }}
              className={`!bg-[#0b6ab2] py-3  !text-white `}
            >
              Satın Al
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
