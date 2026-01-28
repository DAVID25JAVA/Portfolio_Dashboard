"use client";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/themeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme == "light" ? "bg-white transition-all duration-500 " : "bg-gray-900 transition-all duration-500"}`}>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3">
        <Link href="/">
          <span className={`font-bold text-lg sm:text-xl ${theme=='light'?"text-gray-700":"text-gray-100"}`}>
            David.dev
          </span>
        </Link>

        <button onClick={toggleTheme} className="cursor-pointer">
          {theme == "light" ? (
            <Moon className="text-gray-500" />
          ) : (
            <Sun className="text-yellow-500" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
