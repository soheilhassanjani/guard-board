import React, { useState } from "react";
import AppLayout from "@com-layouts/AppLayout";
import Input from "@com-core/Input";
import { usePostAddNewSoldier } from "hook/api/hookApiUser";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const AddSoldiersPage = () => {
  const { push } = useRouter();
  const postAddNewSoldier = usePostAddNewSoldier();
  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  //
  const handleSubmit = () => {
    postAddNewSoldier.mutate(
      {
        nationalId,
        firstName,
        lastName,
        age,
        city,
      },
      {
        onSuccess: (res) => {
          toast.success(res.message);
          push("/soldiers");
        },
        onError: (err) => {
          toast.error(err.response.data.message);
        },
      }
    );
  };
  //
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="col-span-1 col-start-2">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">نام</label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1 col-start-2">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">
              نام خانوادگی
            </label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1 col-start-2">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">کدملی</label>
            <Input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1 col-start-2">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">سن</label>
            <Input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1 col-start-2">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">شهر</label>
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
        </div>
        <div className="col-span-1 col-start-2">
          <button
            onClick={handleSubmit}
            className="w-full h-10 px-3 py-2 mt-2 text-sm text-white bg-blue-500 rounded-lg outline-none"
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

AddSoldiersPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default AddSoldiersPage;
