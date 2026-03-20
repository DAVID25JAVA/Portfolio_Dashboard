"use client";
import Link from "next/link";
 

function Navbar() {
 

  return (
    <div
      className=''
    >
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3">
        <Link href="/">
          <span
            className={`font-bold text-lg sm:text-xl  `}
          >
            David.dev
          </span>
        </Link>

        
      </div>
    </div>
  );
}

export default Navbar;
