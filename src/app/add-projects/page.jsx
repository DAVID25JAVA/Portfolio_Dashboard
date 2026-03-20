"use client";
import { ExternalLink, Github, Image } from "lucide-react";
import React from "react";

const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

function page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-300 px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Add Project</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Fill in the details to showcase your work
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button className="px-5 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
            Publish Project
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="sm:max-w-5xl sm:mx-auto w-full px-3 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* ── LEFT COLUMN ── */}
          <div className="col-span-1 space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Image <span className="text-red-400">*</span>
              </label>
              <div
                className="relative rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 transition-all cursor-pointer"
                style={{ aspectRatio: "16/10" }}
              >
                <div className="flex flex-col items-center justify-center h-full py-10 px-4 text-center">
                  <div className="w-10 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                    <Image size={15} className="text-gray-500" />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    Drop image here
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    or click to browse
                  </p>
                  <p className="text-xs text-gray-400 mt-3">
                    PNG, JPG, WebP · max 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tech Stack <span className="text-red-400">*</span>
              </label>

              {/* Search input */}
              <div className="flex items-center gap-2 px-3.5 py-2.5 border border-gray-300 rounded-lg bg-white">
                <svg
                  className="w-4 h-4 text-gray-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search or type tech..."
                  className="flex-1 text-sm bg-transparent outline-none placeholder-gray-300 text-gray-700"
                />
              </div>

              {/* Added badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-xs rounded-md font-medium"
                  >
                    {t}
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>

              {/* Quick-add chips */}
              <div className="mt-3">
                <p className="text-xs text-gray-400 mb-2">Quick add:</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "MongoDB", "PostgreSQL", "Docker"].map((t) => (
                    <button
                      key={t}
                      className="px-2.5 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:border-gray-400 hover:text-gray-700 transition-all bg-white"
                    >
                      + {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="col-span-2 space-y-5">
            {/* Title + Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Project Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. E-Commerce Platform"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Project Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. shopify-clone"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Describe what this project does, the problem it solves, and any notable features..."
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all resize-none placeholder-gray-300"
              />
              <p className="text-xs text-gray-400 mt-1 text-right">0 / 500</p>
            </div>

            {/* Links */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Project Links
              </label>
              <div className="space-y-3">
                {/* Live Link */}
                <div className="flex items-center gap-3 px-3.5 py-2.5 border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-gray-200 focus-within:border-gray-400 transition-all">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center">
                      <ExternalLink size={15} />
                    </div>
                    <span className="text-xs font-medium text-gray-500 sm:w-14 w-full">
                      Live URL
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gray-200 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter URL"
                    className="flex-1 text-sm bg-transparent outline-none placeholder-gray-300 text-gray-700"
                  />
                </div>

                {/* GitHub Link */}
                <div className="flex items-center gap-3 px-3.5 py-2.5 border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-gray-200 focus-within:border-gray-400 transition-all">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center">
                      <Github size={15} />
                    </div>
                    <span className="text-xs font-medium text-gray-500 sm:w-14 w-full">
                      GitHub
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gray-200 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter URL"
                    className="flex-1 text-sm bg-transparent outline-none placeholder-gray-300 text-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                <span className="text-red-400">*</span> Required fields
              </p>
              <button className="px-6 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
                Publish Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
