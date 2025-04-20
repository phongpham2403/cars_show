"use client";

import { CustomButtonProps } from "@types";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
