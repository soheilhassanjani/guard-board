import menu from "@constants/menu";
import Link from "next/link";
import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative pr-64">
      <div className="w-64 bg-slate-100 border-l border-l-slate-300 absolute right-0 h-full">
        <ul className="pt-6">
          {menu.map((item, i) => {
            return (
              <Link key={i} href={item.href}>
                <li className="py-2 px-4 hover:bg-slate-400 hover:text-white">
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
