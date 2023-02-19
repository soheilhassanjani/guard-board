import AppLayout from "@com-layouts/AppLayout";
import { useDeleteSoldier, useGetSoldiers } from "hook/api/hookApiUser";
import React, { useCallback } from "react";

const SoldiersPage = () => {
  const { data } = useGetSoldiers();

  const deleteSoldier = useDeleteSoldier();

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
          <div key={i} onClick={() => handleDelete(item.nationalId)}>
            {item.firstName}
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
