import React from "react";
import { useFlexLayout, useTable } from "react-table";

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFlexLayout
  );

  return (
    <div className="w-full overflow-auto">
      <div
        {...getTableProps()}
        className="!min-w-full bg-white border border-gray-200 rounded-lg w-fit"
      >
        <div>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <div
              {...headerGroup.getHeaderGroupProps({
                // style: { paddingRight: '15px' },
              })}
              className="rounded-t-lg bg-slate-100"
            >
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  {...column.getHeaderProps()}
                  className="p-2 text-sm text-gray-500"
                >
                  {column.render("Header")}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="">
          {rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <div {...row.getRowProps()} className="border-t border-gray-200">
                {row.cells.map((cell) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div
                      {...cell.getCellProps()}
                      className="p-2 text-sm text-gray-800"
                    >
                      {cell.render("Cell")}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Table;
