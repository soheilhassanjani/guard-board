import PencilIcon from "@com-icons/PencilIcon";
import TrashIcon from "@com-icons/TrashIcon";
import AppLayout from "@com-layouts/AppLayout";
import ConfirmModal from "@com-shared/ConfirmModal";
import Table from "@com-shared/Table";
import { useDeleteGuardBoard, useGetGuardBoards } from "hook/api/hookApiUser";
import Link from "next/link";
import React, { useCallback } from "react";
import { toast } from "react-toastify";

const GuardBoardsPage = () => {
  const { data } = useGetGuardBoards();
  const deleteGuardBoard = useDeleteGuardBoard();

  const handleDelete = useCallback((id, cb) => {
    deleteGuardBoard.mutate(id, {
      onSuccess: (res) => {
        toast.success(res.message);
        cb.onSuccess();
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "تاریخ",
        accessor: "guardBoardDate",
        Cell: ({ value }) => {
          return `${value?.year}/${value?.month}/${value?.day}`;
        },
      },
      {
        Header: "تعداد پاس",
        accessor: "guardCount",
      },
      {
        Header: "تعداد مسیر",
        accessor: "directionCount",
      },
      {
        Header: "تعداد سرباز",
        accessor: "soldiers",
        Cell: ({ value }) => {
          return value.length;
        },
      },
      {
        Header: "ابزار",
        Cell: ({ row }) => {
          return (
            <span className="flex items-center space-s-3">
              <Link
                href={{
                  pathname: "/guard-boards/[id]",
                  query: {
                    id: row.original.id,
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
                        <button
                          onClick={() =>
                            handleDelete(row.original.id, {
                              onSuccess: () => closeModal(),
                            })
                          }
                          className="flex-shrink-0 w-16 px-3 py-2 text-sm text-white bg-red-500 rounded-lg outline-none"
                        >
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

GuardBoardsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default GuardBoardsPage;
