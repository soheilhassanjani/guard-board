import PencilIcon from "@com-icons/PencilIcon";
import TrashIcon from "@com-icons/TrashIcon";
import AppLayout from "@com-layouts/AppLayout";
import Table from "@com-shared/Table";
import {
  useDeleteSoldier,
  useGetSoldiers,
  usePutUpdateSoldier,
} from "hook/api/hookApiUser";
import Link from "next/link";
import React, { useCallback } from "react";

const SoldiersPage = () => {
  const { data } = useGetSoldiers();

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
              <TrashIcon className="w-5 text-red-500" />
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
