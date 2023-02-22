import Input from "@com-core/Input";
import AppLayout from "@com-layouts/AppLayout";
import GuardBoard from "@com-shared/GuardBoard";
import Table from "@com-shared/Table";
import { useGetSoldiers } from "hook/api/hookApiUser";
import React, { useCallback, useState } from "react";

const AddGuardBoardsPage = () => {
  const [directionCount, setDirectionCount] = useState(3);
  const [guardCount, setGuardCount] = useState(3);
  //
  const { data } = useGetSoldiers();
  const columns = React.useMemo(
    () => [
      {
        Header: "نام",
        accessor: "firstName",
      },
      {
        Header: "نام خانوادگی",
        accessor: "lastName",
      },
      {
        Header: "سن",
        accessor: "age",
      },
      {
        Header: "کدملی",
        accessor: "nationalId",
      },
      {
        Header: "شهر",
        accessor: "city",
      },
    ],
    []
  );
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-3 mb-3">
        <div className="col-span-1">
          <div className="">
            <label className="block mb-1 text-sm text-gray-600">تاریخ</label>
            <Input />
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
        <div className="col-span-4">
          {/* oooooooooo */}
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
