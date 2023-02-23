import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GuardBoardTable from "./GuardBoardTable";
import ListSoldiers from "./ListSoldiers";

const GuardBoard = ({
  directionCount,
  guardCount,
  addedSoldiers,
  setAddedSoldiers,
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-1">
          <ListSoldiers
            addedSoldiers={addedSoldiers}
            setAddedSoldiers={setAddedSoldiers}
          />
        </div>
        <div className="col-span-3">
          <GuardBoardTable
            addedSoldiers={addedSoldiers}
            setAddedSoldiers={setAddedSoldiers}
            directionCount={directionCount}
            guardCount={guardCount}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default GuardBoard;
