import CalendarIcon from "@com-icons/CalendarIcon";
import menu from "@constants/menu";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import moment from "jalali-moment";

const AppLayout = ({ children }) => {
  const { pathname } = useRouter();
  //
  const routeInfo = useMemo(
    () => menu.find((item) => item.href === pathname),
    [pathname]
  );
  //
  return (
    <div className="relative min-h-screen pr-64 bg-gray-50">
      <div className="absolute right-0 w-64 h-full bg-gray-800 border-l border-l-slate-300">
        <div className="flex items-center justify-center h-16 p-4 font-bold text-white">
          سامانه لوح نگهبانی
        </div>
        <ul className="flex flex-col px-4 pt-4 space-y-3">
          {menu
            .filter((item) => !item.ignore)
            .map((item, i) => {
              return (
                <Link key={i} href={item.href}>
                  <li
                    className={clsx(
                      "flex transition items-center px-4 py-3 text-sm rounded-lg hover:bg-gray-700 hover:text-white",
                      pathname === item.href
                        ? "bg-gray-700 text-white"
                        : "text-gray-400"
                    )}
                  >
                    <item.icon className="ml-4" />
                    {item.label}
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
      <div className="flex items-center justify-between w-full h-16 px-4 bg-white border-b border-gray-200">
        <div className="flex items-center text-gray-800">
          <div className="p-2 ml-2 bg-gray-200 rounded-full">
            <routeInfo.icon className="w-5 h-5" />
          </div>
          {routeInfo?.label}
        </div>
        <div className="flex items-center text-sm text-gray-800">
          <CalendarIcon className="mb-1 ml-2" />{" "}
          {moment().format("jYYYY-jMM-jDD")}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
