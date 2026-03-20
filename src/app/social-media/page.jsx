import React from "react";
import { fields } from "../../../public/assets";

export default function page() {
  return (
    <div className="p-8 bg-white min-h-full">
      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">
          Social & Contact Links
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Add your contact details and social profiles
        </p>
      </div>

      <div className="max-w-2xl space-y-4">
        {fields.map((field) => (
          <div
            key={field.key}
            className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
          >
            {/* Card header */}
            <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
              <div
                className={`w-7 h-7 rounded-lg ${field.bg} border ${field.border} flex items-center justify-center ${field.color}`}
              >
                {field.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {field.label}
                </p>
                <p className="text-xs text-gray-400">{field.hint}</p>
              </div>
            </div>

            {/* Input + Save */}
            <div className="p-4 flex items-center gap-3">
              <input
                type="text"
                placeholder={field.placeholder}
                className="flex-1 px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700"
              />
              <button className="px-4 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors shrink-0">
                Save
              </button>
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400">All fields are optional</p>
          <button className="px-6 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
}
