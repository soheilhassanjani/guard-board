import React from "react";
import clsx from "clsx";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "bg-white border border-gray-200 rounded-lg h-10 outline-none p-2 text-sm w-full",
        className
      )}
      {...props}
    />
  );
};

export default Input;
