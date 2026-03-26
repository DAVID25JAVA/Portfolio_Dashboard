"use client";
import API from "@/API/API";
import {
  setSkillData,
  setSkillError,
  setSkillLoading,
} from "@/features/skillSlice";
import { BriefcaseBusiness, ClipboardCheck, Lightbulb } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const { skillLoading } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  const [tech, setTech] = useState("");
  const [skill, setSkill] = useState({
    skill: [],
    category: "",
    exp: "",
    totalProject: "",
  });

  const handleSkill = () => {
    if (!tech?.trim) {
      toast.error("Enter your skill");
      return;
    }
    setSkill({
      ...skill,
      skill: [...skill?.skill, tech],
    });
    setTech("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     

    const payload = {
      skill: skill?.skill,
      exp: skill?.exp,
      category: skill?.category,
      totalProject: skill?.totalProject,
    };

    if (!skill.skill || !skill.category || !skill.exp || !skill?.totalProject) {
      toast.error("Please fill Data !");
      return;
    }

    try {
      dispatch(setSkillLoading(true));
      const res = await API({
        method: "POST",
        url: "/skill/create",
        data: payload,
      });
      if (res?.success) {
        dispatch(setSkillData(res?.data));
        dispatch(setSkillLoading(false));
        setSkill({
          skill: [],
          category: "",
          exp: "",
          totalProject: "",
        });
        setTech("");
      }
    } catch (error) {
      dispatch(setSkillLoading(false));
      dispatch(setSkillError(error?.message));
    }
  };

  console.log("Skill--->", skill);
  console.log("Tech--->", tech);

  return (
    <div className="p-4 sm:p-8 bg-white min-h-full">
      {/* Page Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Add Skill</h1>
        <p className="text-sm text-gray-400 mt-1">
          Update your portfolio stats and skills
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="max-w-5xl w-full space-y-6">
          {/* ── SKILL SECTION ── */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Section header */}
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <Lightbulb size={15} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Skill</p>
                <p className="text-xs text-gray-400">
                  Add a new skill to your portfolio
                </p>
              </div>
            </div>

            {/* Form body */}
            <div className="p-5 space-y-4">
              {/* Skill Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Skill Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                  placeholder="e.g. React, Figma, Node.js"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all placeholder-gray-300 text-gray-700"
                />
                <button type="button"
                  onClick={handleSkill}
                  className=" absolute right-1 bottom-1.5 cursor-pointer p-1 px-6 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Add
                </button>
              </div>

              {/* Proficiency */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Proficiency <span className="text-red-400">*</span>
                  </label>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    85%
                  </span>
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
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Category
                </label>
                <select
                  value={skill?.category}
                  onChange={(e) =>
                    setSkill({ ...skill, category: e.target?.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-gray-700 cursor-pointer"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>React</option>
                  <option>DevOps</option>
                  <option>Full Stack (MERN)</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* ── TOTAL EXPERIENCE ── */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <BriefcaseBusiness size={15} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Total Experience
                </p>
                <p className="text-xs text-gray-400">
                  Set your years of experience
                </p>
              </div>
            </div>

            <div className="p-2 sm:p-5">
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all text-lg font-light shrink-0">
                  −
                </button>
                <div className="flex-1 relative">
                  <input
                    type="number"
                    value={skill?.exp}
                    onChange={(e) =>
                      setSkill({ ...skill, exp: e.target?.value })
                    }
                    placeholder="0 yrs"
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-center text-gray-700 font-medium"
                  />
                </div>
                <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all text-lg font-light shrink-0">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* ── TOTAL PROJECTS ── */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <ClipboardCheck size={15} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Total Projects
                </p>
                <p className="text-xs text-gray-400">
                  Set your total completed projects count
                </p>
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
                    value={skill?.totalProject}
                    onChange={(e) =>
                      setSkill({ ...skill, totalProject: e.target?.value })
                    }
                    placeholder="0 total"
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all text-center text-gray-700 font-medium"
                  />
                </div>
                <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-all text-lg font-light shrink-0">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              <span className="text-red-400">*</span> Required fields
            </p>
            <button
              type="submit"
              className="px-6 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
