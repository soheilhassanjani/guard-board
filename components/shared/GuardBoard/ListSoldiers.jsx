import { useGetSoldiers } from "hook/api/hookApiUser";
import React from "react";
import ItemSoldiers from "./ItemSoldiers";

const ListSoldiers = ({ addedSoldiers, setAddedSoldiers }) => {
  const soldiers = useGetSoldiers();
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center h-10 px-3 text-sm text-gray-500 bg-slate-100">
        لیست سربازان
      </div>
      {soldiers?.data
        ?.filter((item) => {
          return !addedSoldiers.some((soldier) => soldier.id === item?.id);
        })
        ?.map((soldier) => {
          return (
            <ItemSoldiers
              key={soldier.id}
              soldier={soldier}
              setAddedSoldiers={setAddedSoldiers}
            />
          );
        })}
    </div>
  );
};

export default ListSoldiers;
