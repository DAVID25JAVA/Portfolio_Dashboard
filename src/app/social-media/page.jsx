"use client";
import React, { useState } from "react";
import { fields } from "../../../public/assets";
import { useDispatch, useSelector } from "react-redux";
import API from "@/API/API";
import Input from "@/components/UI/Input";
import toast from "react-hot-toast";
import {
  setError,
  setLoading,
  setSocialMediaData,
} from "@/features/socialMediaSlice";
import Loader from "@/components/UI/Loading";

export default function page() {
  const [socialMedia, setSocialMedia] = useState({
    linkedIn: "",
    github: "",
    email: "",
    number: "",
    resume: "",
    address: "",
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.social);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      linkedIn: socialMedia?.linkedIn,
      github: socialMedia?.github,
      email: socialMedia?.email,
      number: socialMedia?.number,
      resume: socialMedia?.resume,
      address: socialMedia?.address,
    };
    if (
      !socialMedia?.linkedIn ||
      !socialMedia?.github ||
      !socialMedia?.email ||
      !socialMedia?.address ||
      !socialMedia?.resume ||
      !socialMedia?.number
    ) {
      toast.error("Please enter data !");
      return;
    }

    try {
      dispatch(setLoading(true));
      const res = await API({
        method: "POST",
        url: "/social-media/create",
        data: payload,
      });
      if (res?.success) {
        dispatch(setSocialMediaData(res?.data));
        toast.success(res?.message);
        setSocialMedia({
          linkedIn: "",
          github: "",
          email: "",
          number: "",
          resume: "",
          address: "",
        });
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.log(error?.message);
      dispatch(setLoading(false));
      dispatch(setError(error?.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="sm:p-8 p-4 bg-white min-h-full">
      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">
          Social & Contact Links
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Add your contact details and social profiles
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="w-full max-w-5xl space-y-4 mx-3">
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

              {/* Input inside the card — FIXED: was outside the card div before */}
              <div className="px-5 py-3">
                <Input
                  className="w-full"
                  type={field?.type}
                  placeholder={field?.placeholder}
                  value={socialMedia[field?.key]}
                  onChange={(e) =>
                    setSocialMedia({
                      ...socialMedia,
                      [field.key]: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400">All fields are optional</p>
            <button
              type="submit"
              className="px-4 cursor-pointer sm:px-6 py-2 sm:py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              {loading ? <Loader /> : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
