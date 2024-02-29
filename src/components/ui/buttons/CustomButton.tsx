import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

const CustomButton: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={` bg-[#1C4DA1] text-white cursor-pointer rounded-lg flex justify-center items-center font-bold text-[16px] ${className} `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
