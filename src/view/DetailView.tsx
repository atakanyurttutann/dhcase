"use client";
import CustomButton from "@/components/ui/buttons/CustomButton";
import { packageData } from "@/data/data";
import Image from "next/image";
import { dispatch } from "@/store/store";
import { addBasket } from "@/store/slice/basketSlice";
import { useParams } from "next/navigation";
import FeaturesCard from "@/components/ui/card/FeaturesCard";

const DetailView = () => {
  const params = useParams<{ id: string }>();
  const data = packageData.find((q) => q.id == parseInt(params.id));
  return (
    <div className="custom-container">
      {data && (
        <div className=" p-3 bg-white  rounded-lg w-full mt-10 lg:mt-20 shadow-lg">
          <div className=" w-full flex lg:gap-[20px] flex-wrap lg:flex-nowrap ">
            <div className="  relative min-w-full lg:min-w-[433px] h-[433px]">
              <Image fill alt={data?.name} src={data?.image} className=" rounded-lg  bg-cover" />
            </div>
            <div className=" flex flex-col justify-between">
              <div>
                <div className=" py-1 text-white text-[14px] lg:mt-0 mt-2 bg-green-500 font-bold  w-[160px] flex justify-center items-center rounded">
                  %95 Başarı Oranı
                </div>
                <div className=" font-bold text-[24px] text-[#3a4759] mt-2">{data?.name}</div>
                <div className=" mt-2 text-[13px] text-[#3a4759] font-[500]">
                  {data?.description}
                </div>
              </div>
              <div className=" p-2 bg-[#f1f6f9] rounded-lg lg:mt-0 mt-3">
                <div className=" flex justify-between items-center lg:flex-nowrap flex-wrap">
                  <div>
                    <div className=" flex gap-[10px]  items-center">
                      <div className="  text-blue-600 text-[25px]   font-bold ">
                        {data?.discountedPrice} {" TL"}
                      </div>
                      <div className="  text-red-600 text-[14px]   font-bold line-through ">
                        {data?.price} {" TL"}
                      </div>
                    </div>
                    <div className="  mt-1  text-[12px]  text-green-400">
                      Peşin Fiyatına Vade Farksız{" "}
                      <span className="  font-bold">Ayda {data?.installment} TL</span>
                      Taksite
                    </div>
                  </div>
                  <div className=" lg:w-auto w-full lg:mt-0 mt-2">
                    <CustomButton
                      onClick={() => {
                        dispatch(addBasket({ name: data.name, id: data.id }));
                      }}
                      className={
                        " px-3 py-3 font-semibold  lg:text-[16px] text-[10px] lg:mt-0 mt-1 !w-full"
                      }
                    >
                      Hemen Satın Al
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-3">
            <FeaturesCard />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
