"use client";
import React from "react";
import { sidebarLinks } from "../../public/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div
      className={`md:w-64 w-16 border-r h-137.5 text-base border-gray-300 pt-4 flex flex-col transition-all duration-300  `}
    >
      {sidebarLinks.map((item, index) => {
        const isActive =
          pathname === item.path || pathname.startsWith(item.path + "/");

        return (
          <Link
            href={item.path}
            key={index}
            className={`flex items-center py-3 px-4 gap-3  ${
              isActive
                ? `border-r-4 md:border-r-[6px] bg-gray-100  `
                : ` border-white hover:bg-gray-100  `
            }`}
          >
            {item.icon}
            <p className={`md:block hidden text-center  `}>{item.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
