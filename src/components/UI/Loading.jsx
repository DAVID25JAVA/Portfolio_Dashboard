import React from "react";

function Loader() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
