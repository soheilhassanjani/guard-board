import clsx from "clsx";
import React from "react";
import { useDrag } from "react-dnd";

const ItemSoldiers = ({ soldier, setAddedSoldiers }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { ...soldier },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setAddedSoldiers((prev) => [
          ...prev,
          {
            ...soldier,
            directionNumber: dropResult?.directionNumber,
            guardNumber: dropResult?.guardNumber,
          },
        ]);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  //
  return (
    <div
      ref={drag}
      className={clsx("text-sm p-3 border-t cursor-move border-gray-200", {
        "opacity-50 bg-yellow-100": isDragging,
      })}
    >
      {soldier?.firstName + " " + soldier?.lastName}
    </div>
  );
};

export default ItemSoldiers;
