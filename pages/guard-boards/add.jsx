import React, { useState } from "react";
import DatePicker from "@com-core/DatePicker";
import Input from "@com-core/Input";
import AppLayout from "@com-layouts/AppLayout";
import GuardBoard from "@com-shared/GuardBoard";

const AddGuardBoardsPage = () => {
  const [guardBoardDate, setGuardBoardDate] = useState(null);
  const [directionCount, setDirectionCount] = useState(3);
  const [guardCount, setGuardCount] = useState(3);
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
          <button className="w-full h-10 px-3 py-2 mt-6 text-sm text-white bg-blue-500 rounded-lg outline-none">
            ثبت
          </button>
        </div>
        <div className="col-span-4">
          {/* guard board */}
          <GuardBoard directionCount={directionCount} guardCount={guardCount} />
        </div>
      </div>
    </div>
  );
};

AddGuardBoardsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default AddGuardBoardsPage;
