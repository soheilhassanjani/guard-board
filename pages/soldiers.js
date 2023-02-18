import AppLayout from "@com-layouts/AppLayout";
import { useGetSoldiers } from "hook/api/hookApiUser";
import React from "react";

const SoldiersPage = () => {
  const { data } = useGetSoldiers();
  console.log(data);
  return (
    <div>
      {data.map((item, i) => {
        return <div key={i}>{item.firstName}</div>;
      })}
    </div>
  );
};

SoldiersPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default SoldiersPage;
