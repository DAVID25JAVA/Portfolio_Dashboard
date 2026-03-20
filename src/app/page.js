"use client";
import { stats, skills, projects } from "../../public/assets";

export default function Home() {
  return (
    <div className="p-8 bg-white min-h-full space-y-8">
      {/* ── WELCOME HEADER ── */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome back, David 👋
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Here's an overview of your portfolio
          </p>
        </div>
        <div className=" hidden sm:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="text-xs text-gray-400">Portfolio live</span>
        </div>
      </div>

      {/* ── STAT CARDS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center justify-center md:justify-between mb-4">
              <div
                className={`w-9 h-9 rounded-lg ${s.bg} border ${s.border} flex items-center justify-center ${s.color}`}
              >
                {s.icon}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-800 text-center md:text-start">{s.value}</p>
            <p className="text-xs text-gray-400 mt-1 text-center md:text-start">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── SKILLS + PROJECTS GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* ── SKILLS IN EXPERTISE ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                Skills in Expertise
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {skills.length} skills
              </p>
            </div>
            <a
              href="/skills"
              className="text-xs text-gray-500 hover:text-gray-800 hover:underline transition-colors"
            >
              Manage →
            </a>
          </div>

          <div className="divide-y divide-gray-50">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="px-5 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-500 rounded">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-700 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TOP PROJECTS ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                Top Projects
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {projects.length} featured
              </p>
            </div>
            <a
              href="/projects"
              className="text-xs text-gray-500 hover:text-gray-800 hover:underline transition-colors"
            >
              View all →
            </a>
          </div>

          <div className="divide-y divide-gray-50">
            {projects.map((project) => (
              <div
                key={project.name}
                className="px-5 py-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* Title + name */}
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {project.title}
                      </p>
                      <span className="text-xs text-gray-400 shrink-0">
                        · {project.name}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {project.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex items-center gap-1.5 mt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-gray-100 border border-gray-200 text-gray-600 text-xs rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.live}
                      className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-all bg-white"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      className="w-7 h-7 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-all bg-white"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
