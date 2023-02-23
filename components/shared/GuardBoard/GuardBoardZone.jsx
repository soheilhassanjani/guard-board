import React, { useMemo } from "react";
import { useDrop } from "react-dnd";
import GuardBoardTableItem from "./GuardBoardTableItem";

const GuardBoardZone = ({
  guardNumber,
  directionNumber,
  addedSoldiers,
  setAddedSoldiers,
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ guardNumber, directionNumber }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  //
  const itemDetail = useMemo(() => {
    return (
      addedSoldiers?.find(
        (item) =>
          item?.guardNumber === guardNumber &&
          item?.directionNumber === directionNumber
      ) ?? null
    );
  }, [addedSoldiers, directionNumber, guardNumber]);
  //
  if (itemDetail) {
    return (
      <div className="flex items-center justify-center flex-1 text-sm border-r border-gray-200">
        <GuardBoardTableItem
          soldier={itemDetail}
          setAddedSoldiers={setAddedSoldiers}
        />
      </div>
    );
  }
  return (
    <div
      ref={drop}
      className="flex items-center justify-center flex-1 text-sm border-r border-gray-200"
    >
      {isActive ? (
        <div className="w-full h-full bg-green-100 animate-pulse"></div>
      ) : (
        <span className="text-gray-400">خالی</span>
      )}
    </div>
  );
};

export default GuardBoardZone;
