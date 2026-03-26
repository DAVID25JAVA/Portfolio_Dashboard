"use client";
import API from "@/API/API";
import { setLoading, setProjectData, setError } from "@/features/projectSlice";
import { ExternalLink, Github, Image, Search, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/UI/Loading";
import toast from "react-hot-toast";

// const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

function page() {
  const [techInput, setTechInput] = useState("");
  const [img, setImg] = useState("");
  const [project, setProject] = useState({
    name: "",
    title: "",
    desc: "",
    images: [],
    liveLink: "",
    githubLink: "",
    techStack: [],
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.project);

  const handleAddTech = (e) => {
    e.preventDefault();
    if (!techInput.trim()) return;
    setProject({
      ...project,
      techStack: [...project.techStack, techInput],
    });
    setTechInput("");
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setProject((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", project.name);
  //   formData.append("title", project.title);
  //   formData.append("desc", project.desc);
  //   // formData.append("images", project?.images);
  //   project.images.forEach((img) => {
  //     formData.append("images", img);
  //   });
  //   formData.append("liveLink", project.liveLink);
  //   formData.append("githubLink", project.githubLink);
  //   formData.append("techStack", project.techStack);

  //   if (Object.keys(formData).length === 0) {
  //     toast.error("Please Enter Form Data");
  //     return;
  //   }
  //   try {
  //     dispatch(setLoading(true));
  //     const res = await API({
  //       method: "POST",
  //       url: "/project/create",
  //       data: formData,
  //     });
  //     if (res.success) {
  //       dispatch(setProjectData(res?.project));
  //       setProject({
  //         name: "",
  //         title: "",
  //         desc: "",
  //         images: "",
  //         liveLink: "",
  //         githubLink: "",
  //         techStack: "",
  //       });
  //       dispatch(setLoading(false));
  //     }
  //   } catch (error) {
  //     console.log("Create project error--->", error.message);
  //     dispatch(setError(error.message));
  //     dispatch(setLoading(false));
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !project.name ||
    !project.title ||
    !project.desc ||
    project.images.length === 0
  ) {
    toast.error("Please Enter Form Data");
    return;
  }

  const formData = new FormData();

  formData.append("name", project.name);
  formData.append("title", project.title);
  formData.append("desc", project.desc);

  project.images.forEach((img) => {
    formData.append("images", img);
  });

  formData.append("liveLink", project.liveLink);
  formData.append("githubLink", project.githubLink);
  formData.append("techStack", JSON.stringify(project.techStack));

  try {
    dispatch(setLoading(true));
    const res = await API({
      method: "POST",
      url: "/project/create",
      data: formData,
    });

    if (res.success) {
      dispatch(setProjectData(res.project));
      toast.success(res?.message)
      setProject({
        name: "",
        title: "",
        desc: "",
        images: [],
        liveLink: "",
        githubLink: "",
        techStack: [],
      });
      dispatch(setLoading(false))
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

  console.log("Project--->", project);

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
      </div>

      {/* Body */}
      <form onSubmit={handleSubmit}>
        <div className="sm:max-w-5xl sm:mx-auto w-full px-3 sm:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* ── LEFT COLUMN ── */}
            <div className="col-span-1 space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Image <span className="text-red-400">*</span>
                </label>

                <label
                  className="relative block rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 transition-all cursor-pointer"
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

                  {/* File Input (UI only) */}
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    accept="image/png, image/jpeg, image/webp"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tech Stack <span className="text-red-400">*</span>
                </label>

                {/* Search input */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 border border-gray-300 rounded-lg bg-white">
                  <Search size={15} />
                  <input
                    type="text"
                    placeholder="Search or type tech..."
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    className="flex-1 text-sm bg-transparent outline-none placeholder-gray-300 text-gray-700"
                  />
                  <button
                    onClick={handleAddTech}
                    className="px-4 py-2 outline-none cursor-pointer bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
                {project.techStack?.map((item, index) => (
                  <div key={index} className="relative">
                    <p className="border rounded-md px-2 py-1 mt-2 border-gray-300">
                      {item}{" "}
                      <span className="absolute right-1 top-1 cursor-pointer">
                        <X className="text-gray-400" size={23} />
                      </span>
                    </p>
                  </div>
                ))}
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
                    value={project.title}
                    onChange={(e) =>
                      setProject({ ...project, title: e.target.value })
                    }
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
                    value={project.name}
                    onChange={(e) =>
                      setProject({ ...project, name: e.target.value })
                    }
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
                  value={project.desc}
                  onChange={(e) =>
                    setProject({ ...project, desc: e.target.value })
                  }
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
                      value={project.liveLink}
                      onChange={(e) =>
                        setProject({ ...project, liveLink: e.target.value })
                      }
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
                      value={project.githubLink}
                      onChange={(e) =>
                        setProject({ ...project, githubLink: e.target.value })
                      }
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
                <button
                  type="submit"
                  className={`px-6 py-2.5 outline-none cursor-pointer bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors`}
                >
                  {loading ? <Loader /> : "Publish Project"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default page;
