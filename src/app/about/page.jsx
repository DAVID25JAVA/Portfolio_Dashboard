import { Code, FileImage, Logs, User, UserRound } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="p-8 bg-white min-h-full">
      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">About</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your personal info and profile details
        </p>
      </div>

      <div className="max-w-2xl space-y-4">
        {/* ── PROFILE IMAGE ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
          <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-500">
              <FileImage size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Profile Image
              </p>
              <p className="text-xs text-gray-400">
                Upload your profile or avatar photo
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-5">
              {/* Avatar preview */}
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                <User className="text-gray-600" />
              </div>

              {/* Upload area */}
              <div className="flex-1">
                <div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 hover:border-gray-400 hover:bg-gray-100 transition-all cursor-pointer px-5 py-4 text-center">
                  <p className="text-sm text-gray-600 font-medium">
                    Click to upload
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-300 mt-2">
                    PNG, JPG, WebP · max 5MB
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Recommended: square image, at least 400×400px
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── FULL NAME ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
          <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
              <UserRound size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Full Name</p>
              <p className="text-xs text-gray-400">
                Your display name on the portfolio
              </p>
            </div>
          </div>
          <div className="p-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="e.g. David Pal"
              className="flex-1 px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700"
            />
            <button className="px-4 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors shrink-0">
              Save
            </button>
          </div>
        </div>

        {/* ── DEVELOPER ROLE ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
          <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500">
              <Code size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                Developer Role
              </p>
              <p className="text-xs text-gray-400">
                Your title shown under your name
              </p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="e.g. Full Stack Developer"
                className="flex-1 px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700"
              />
              <button className="px-4 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors shrink-0">
                Save
              </button>
            </div>
            {/* Quick role chips */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-400">Quick select:</span>
              {[
                "Frontend Developer",
                "Full Stack Developer",
                "Backend Developer",
                "UI/UX Designer",
              ].map((role) => (
                <button
                  key={role}
                  className="px-2.5 py-1 text-xs border border-gray-200 text-gray-500 rounded-md hover:border-gray-400 hover:text-gray-700 bg-white transition-all"
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SUMMARY ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
          <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
              <Logs size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Summary</p>
              <p className="text-xs text-gray-400">
                A short bio shown on your portfolio
              </p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <textarea
              rows={4}
              placeholder="Write a short bio about yourself, your experience and what you love to build..."
              className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all resize-none placeholder-gray-300 text-gray-700"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-400">0 / 300 characters</p>
              <button className="px-4 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
                Save
              </button>
            </div>
          </div>
        </div>

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
