import AppLayout from "@com-layouts/AppLayout";
import { usePostAddNewSoldier } from "hook/api/hookApiUser";
import React from "react";

const AddSoldierPage = () => {
  const postAddNewSoldier = usePostAddNewSoldier();

  const handlePost = () => {
    postAddNewSoldier.mutate(
      {
        nationalId: "2189746363",
        firstName: "علی",
        lastName: "اسماعیلی",
        age: "22",
        city: "محمودآباد",
      },
      {
        onSuccess: () => {
          console.log("hi");
        },
        onError: () => {
          console.log(err);
        },
      }
    );
  };
  return (
    <div>
      <button
        className="bg-slate-200 rounded-lg px-4 py-2"
        onClick={handlePost}
      >
        ثبت
      </button>
    </div>
  );
};

AddSoldierPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default AddSoldierPage;
