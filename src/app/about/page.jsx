"use client";
import API from "@/API/API";
import Loader from "@/components/UI/Loading";
import { setAboutData, setAboutError, setAboutLoading } from "@/features/about";
import { Code, FileImage, Logs, User, UserRound } from "lucide-react";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const ref = useRef();
  const dispatch = useDispatch();
  const { aboutLoading } = useSelector((state) => state.about);
  const [about, setAbout] = useState({
    name: "",
    images: [],
    developerRole: "",
    summery: "",
  });

  const handleImage = (e) => {
    const file = Array.from(e.target.files);
    setAbout((prev) => ({
      ...prev,
      images: [...prev.images, ...file],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", about.name);
    formData.append("summery", about.summery);
    formData.append("developerRole", about.developerRole);
    about?.images.forEach((img) => {
      formData.append("images", img);
    });

    if (
      !about.name ||
      !about?.images ||
      !about?.developerRole ||
      !about?.summery
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      dispatch(setAboutLoading(true));
      const res = await API({
        method: "POST",
        url: "/about/create",
        data: formData,
      });
      console.log(res);
      toast.success(res?.message)
      if (res?.success) {
        console.log("Res--->", res);
        dispatch(setAboutData(res?.data));
        setAbout({
          name: "",
          images: [],
          developerRole: "",
          summery: "",
        });
        dispatch(setAboutLoading(false));
      }
    } catch (error) {
      dispatch(setAboutLoading(false));
      dispatch(setAboutError(error?.message));
      toast.error(error?.message)
    }
  };

  console.log("About--->", about);

  return (
    <div className="p-4 sm:p-8 bg-white min-h-full">
      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">About</h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage your personal info and profile details
        </p>
      </div>

      <form onSubmit={handleSubmit}>
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
              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* Avatar preview */}
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                  <User className="text-gray-600" />
                </div>

                {/* Upload area */}
                <div className="flex-1">
                  <div
                    onClick={() => ref.current.click()}
                    className="border-2 border-dashed cursor-pointer border-gray-200 rounded-xl bg-gray-50 hover:border-gray-400 hover:bg-gray-100 transition-all px-5 py-4 text-center"
                  >
                    <p className="text-sm text-gray-600 font-medium">
                      Click to upload
                    </p>
                    <input
                      onChange={handleImage}
                      ref={ref}
                      type="file"
                      multiple
                      className="hidden"
                    />
                    <p className="text-xs text-gray-400 mt-0.5">
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-300 mt-2">
                      PNG, JPG, WebP · max 5MB
                    </p>
                  </div>

                  {/* <div className="flex justify-end">
                    
                  <button className="text-gray-200 text-sm bg-gray-800 hover:bg-gray-700 p-2 mt-2 rounded-md cursor-pointer">
                    Add Image
                  </button>
                   </div> */}
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
            <div className="p-4 flex flex-col sm:flex-row items-end sm:items-center gap-3">
              <input
                type="text"
                value={about?.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                placeholder="e.g. David Pal"
                className="flex-1 px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700"
              />
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
              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                <input
                  type="text"
                  value={about?.developerRole}
                  onChange={(e) =>
                    setAbout({ ...about, developerRole: e.target.value })
                  }
                  placeholder="e.g. Full Stack Developer"
                  className="flex-1 px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700"
                />
              </div>
              {/* Quick role chips */}
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
                value={about?.summery}
                onChange={(e) =>
                  setAbout({ ...about, summery: e.target.value })
                }
                placeholder="Write a short bio about yourself, your experience and what you love to build..."
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all resize-none placeholder-gray-300 text-gray-700"
              />
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400">0 / 300 characters</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400">All fields are optional</p>
            <button
              type="submit"
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              {aboutLoading ? <Loader /> : " Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
