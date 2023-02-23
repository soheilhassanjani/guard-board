import PencilIcon from "@com-icons/PencilIcon";
import TrashIcon from "@com-icons/TrashIcon";
import AppLayout from "@com-layouts/AppLayout";
import ConfirmModal from "@com-shared/ConfirmModal";
import Table from "@com-shared/Table";
import {
  useDeleteSoldier,
  useGetGuardBoards,
  usePutUpdateSoldier,
} from "hook/api/hookApiUser";
import Link from "next/link";
import React, { useCallback } from "react";

const SoldiersPage = () => {
  const { data } = useGetGuardBoards();
  console.log(data);
  const deleteSoldier = useDeleteSoldier();
  const putUpdateSoldier = usePutUpdateSoldier();

  const handleUpdate = useCallback((id) => {
    putUpdateSoldier.mutate(
      {
        nationalId: "2189746363",
        firstName: "محمد",
        lastName: "اسماعیلی",
        age: "19",
        city: "محمودآباد",
        id,
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
      {
        Header: "ابزار",
        Cell: () => {
          return (
            <span className="flex items-center space-s-3">
              <Link
                href={{
                  pathname: "/soldiers/[id]",
                  query: {
                    id: 10,
                  },
                }}
              >
                <PencilIcon className="w-5" />
              </Link>

              <ConfirmModal
                triggerElement={({ openModal }) => (
                  <TrashIcon
                    onClick={() => openModal()}
                    className="w-5 text-red-500 cursor-pointer"
                  />
                )}
                title="هشدار"
                modalContent={({ closeModal }) => {
                  return (
                    <>
                      <div className="mt-2 text-sm">
                        آیا از حذف کردن خود مطمئن هستید ؟
                      </div>
                      <div className="flex items-center justify-end mt-4 space-s-3">
                        <button
                          onClick={closeModal}
                          className="flex-shrink-0 w-16 px-3 py-2 text-sm rounded-lg outline-none bg-slate-200"
                        >
                          بستن
                        </button>
                        <button className="flex-shrink-0 w-16 px-3 py-2 text-sm text-white bg-red-500 rounded-lg outline-none">
                          حذف
                        </button>
                      </div>
                    </>
                  );
                }}
              />
            </span>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="p-4">
      <Table columns={columns} data={data ?? []} />
    </div>
  );
};

SoldiersPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default SoldiersPage;
