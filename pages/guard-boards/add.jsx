import React, { useState } from "react";
import DatePicker from "@com-core/DatePicker";
import Input from "@com-core/Input";
import AppLayout from "@com-layouts/AppLayout";
import GuardBoard from "@com-shared/GuardBoard";
import { usePostAddNewGuardBoard } from "hook/api/hookApiUser";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const AddGuardBoardsPage = () => {
  const { push } = useRouter();
  const postAddNewGuardBoard = usePostAddNewGuardBoard();
  //
  const [guardBoardDate, setGuardBoardDate] = useState(null);
  const [directionCount, setDirectionCount] = useState(3);
  const [guardCount, setGuardCount] = useState(3);
  const [addedSoldiers, setAddedSoldiers] = useState([]);
  //
  const handleSubmit = () => {
    postAddNewGuardBoard.mutate(
      {
        guardBoardDate,
        directionCount,
        guardCount,
        soldiers: addedSoldiers,
      },
      {
        onSuccess: (res) => {
          toast.success(res.message);
          push("/guard-boards");
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
      <div className="grid grid-cols-4 gap-3 mb-3">
        <div className="col-span-1">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">تاریخ</label>
            <DatePicker value={guardBoardDate} onChange={setGuardBoardDate} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">
              تعداد مسیر
            </label>
            <Input
              type="number"
              min="0"
              value={directionCount}
              onChange={(e) => setDirectionCount(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">
              تعداد پاس
            </label>
            <Input
              type="number"
              min="0"
              value={guardCount}
              onChange={(e) => setGuardCount(e.target.value)}
            />
          </div>
        </div>
        <div className="col-span-1">
          <button
            disabled={!guardBoardDate}
            onClick={handleSubmit}
            className="w-full h-10 px-3 py-2 mt-6 text-sm text-white bg-blue-500 rounded-lg outline-none"
          >
            ثبت
          </button>
        </div>
        <div className="col-span-4">
          {/* guard board */}
          <GuardBoard
            directionCount={directionCount}
            guardCount={guardCount}
            addedSoldiers={addedSoldiers}
            setAddedSoldiers={setAddedSoldiers}
          />
        </div>
      </div>
    </div>
  );
};

AddGuardBoardsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default AddGuardBoardsPage;
