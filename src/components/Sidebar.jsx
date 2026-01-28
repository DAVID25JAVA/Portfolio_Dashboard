"use client";
import React from "react";
import { sidebarLinks } from "../../public/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/themeContext";

function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`md:w-64 w-16 border-r h-137.5 text-base border-gray-300 pt-4 flex flex-col transition-all duration-300 ${
        theme == "light" ? "bg-white" : "bg-gray-950"
      }`}
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
                ? `border-r-4 md:border-r-[6px] ${
                    theme == "light"
                      ? "bg-indigo-500/10 border-indigo-500"
                      : "bg-gray-900  text-gray-200"
                  }`
                : ` border-white  ${
                    theme == "light"
                      ? "hover:bg-gray-200 text-gray-700"
                      : "hover:bg-gray-900 text-gray-200"
                  }`
            }`}
          >
            {item.icon}
            <p
              className={`md:block hidden text-center ${
                theme == "light" ? "text-gray-800" : "text-gray-300"
              }`}
            >
              {item.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
