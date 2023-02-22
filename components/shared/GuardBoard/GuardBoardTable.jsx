import React from "react";
import GuardBoardZone from "./GuardBoardZone";

const GuardBoardTable = ({
  addedSoldiers,
  guardCount,
  directionCount,
  setAddedSoldiers,
}) => {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      {/* head */}
      <div className="flex items-center rounded-t-lg bg-slate-100">
        <div className="flex-shrink-0 w-16 h-10"></div>
        {Array.from({ length: Number(guardCount) }).map((_, index) => {
          return (
            <div
              className="flex items-center justify-center flex-1 h-10 text-xs text-center text-gray-500 border-r border-gray-200"
              key={index}
            >
              <span className="">پاس</span>
              <span className="mr-1">{index + 1}</span>
            </div>
          );
        })}
      </div>
      {/* body */}
      {Array.from({ length: Number(directionCount) }).map(
        (_, directionNumber) => {
          return (
            <div
              key={directionNumber}
              className="flex border-t border-gray-200"
            >
              <div className="flex-shrink-0 w-16 py-2 text-xs text-center text-gray-500 bg-slate-100">
                <div className="">مسیر</div>
                <div className="">{directionNumber + 1}</div>
              </div>
              {Array.from({ length: Number(guardCount) }).map(
                (_, guardNumber) => {
                  return (
                    <GuardBoardZone
                      key={guardNumber}
                      guardNumber={guardNumber}
                      directionNumber={directionNumber}
                      addedSoldiers={addedSoldiers}
                      setAddedSoldiers={setAddedSoldiers}
                    />
                  );
                }
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

export default GuardBoardTable;
