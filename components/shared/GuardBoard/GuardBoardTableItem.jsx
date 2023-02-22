import TrashIcon from "@com-icons/TrashIcon";
import React from "react";

const GuardBoardTableItem = ({ soldier, setAddedSoldiers }) => {
  //
  const handleRemove = (id) => {
    setAddedSoldiers((prev) => prev.filter((item) => item.id !== id));
  };
  //
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-green-100">
      {soldier?.firstName + " " + soldier?.lastName}
      <div
        className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white transition bg-red-500 opacity-0 cursor-pointer hover:opacity-100"
        onClick={() => handleRemove(soldier?.id)}
      >
        <TrashIcon className="w-4 ml-2" />
        حذف سرباز
      </div>
    </div>
  );
};

export default GuardBoardTableItem;
