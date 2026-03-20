import React from 'react'

export default function page() {
  return (
    <div className="p-8 bg-white min-h-full">

      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Add Skill</h1>
        <p className="text-sm text-gray-400 mt-1">Update your portfolio stats and skills</p>
      </div>

      <div className="max-w-2xl space-y-6">

        {/* ── SKILL SECTION ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Section header */}
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Skill</p>
              <p className="text-xs text-gray-400">Add a new skill to your portfolio</p>
            </div>
          </div>

          {/* Form body */}
          <div className="p-5 space-y-4">

            {/* Skill Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Skill Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. React, Figma, Node.js"
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700"
              />
            </div>

            {/* Proficiency */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Proficiency <span className="text-red-400">*</span>
                </label>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">85%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="85"
                className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-gray-800"
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-300">Beginner</span>
                <span className="text-xs text-gray-300">Intermediate</span>
                <span className="text-xs text-gray-300">Expert</span>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
              <select className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-gray-700 cursor-pointer">
                <option value="" disabled>Select a category</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Database</option>
                <option>DevOps</option>
                <option>Design</option>
                <option>Language</option>
                <option>Other</option>
              </select>
            </div>

            {/* Save Skill button */}
            <div className="pt-1">
              <button className="w-full py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
                Save Skill
              </button>
            </div>
          </div>
        </div>

        {/* ── TOTAL EXPERIENCE ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Total Experience</p>
              <p className="text-xs text-gray-400">Set your years of experience</p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all text-lg font-light shrink-0">
                −
              </button>
              <div className="flex-1 relative">
                <input
                  type="number"
                  defaultValue="3"
                  min="0"
                  max="50"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-center text-gray-700 font-medium"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                  yrs
                </span>
              </div>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all text-lg font-light shrink-0">
                +
              </button>
              <button className="px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors shrink-0">
                Save
              </button>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-gray-400">Quick set:</span>
              {[1, 2, 3, 5, 7, 10].map((yr) => (
                <button
                  key={yr}
                  className="px-2.5 py-1 text-xs border border-gray-200 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-700 bg-white transition-all"
                >
                  {yr}y
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── TOTAL PROJECTS ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Total Projects</p>
              <p className="text-xs text-gray-400">Set your total completed projects count</p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all text-lg font-light shrink-0">
                −
              </button>
              <div className="flex-1 relative">
                <input
                  type="number"
                  defaultValue="24"
                  min="0"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-center text-gray-700 font-medium"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                  total
                </span>
              </div>
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all text-lg font-light shrink-0">
                +
              </button>
              <button className="px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors shrink-0">
                Save
              </button>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-gray-400">Quick set:</span>
              {[5, 10, 15, 20, 25, 50].map((n) => (
                <button
                  key={n}
                  className="px-2.5 py-1 text-xs border border-gray-200 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-700 bg-white transition-all"
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            <span className="text-red-400">*</span> Required fields
          </p>
          <button className="px-6 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
            Save All Changes
          </button>
        </div>

      </div>
    </div>
  )
}