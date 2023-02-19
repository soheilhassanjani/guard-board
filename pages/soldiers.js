import AppLayout from "@com-layouts/AppLayout";
import {
  useDeleteSoldier,
  useGetSoldiers,
  usePutUpdateSoldier,
} from "hook/api/hookApiUser";
import React, { useCallback } from "react";

const SoldiersPage = () => {
  const { data } = useGetSoldiers();

  const deleteSoldier = useDeleteSoldier();
  const putUpdateSoldier = usePutUpdateSoldier();

  const handleUpdate = useCallback((id) => {
    putUpdateSoldier.mutate(
      {
        nationalId: id,
        firstName: "محمد",
        lastName: "اسماعیلی",
        age: "19",
        city: "محمودآباد",
      },
      {
        onSuccess: () => {
          console.log("done");
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  }, []);

  const handleDelete = useCallback((id) => {
    deleteSoldier.mutate(id, {
      onSuccess: () => {
        console.log("done");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  }, []);

  return (
    <div>
      {data?.map((item, i) => {
        return (
          <div key={i} className="flex mt-1">
            <div className="w-20">{item.firstName}</div>
            <div className="flex gap-2">
              <button
                className="text-red-500 outline rounded-md p-1"
                onClick={() => handleDelete(item.nationalId)}
              >
                delete
              </button>
              <button
                className="text-yellow-500 outline rounded-md p-1"
                onClick={() => handleUpdate(item.nationalId)}
              >
                update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

SoldiersPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default SoldiersPage;
