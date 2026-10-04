"use client";

import { motion } from "framer-motion";
import { Users, Database, Video, ArrowUpRight, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Physics Wallah Operations & Influencer Engine",
    category: "EdTech Operations & Creator Partnerships",
    description: "Spearheaded creator partnerships at scale, managing 50+ top influencers simultaneously while reviewing and QAing 900+ scripts and videos in 2.5 months. Built operational SOPs, coordinated faculty schedules, and automated tracking with Google Sheets and Apps Script.",
    metrics: [
      { label: "Creators Managed", value: "50+" },
      { label: "Scripts & QA'd", value: "900+" },
      { label: "Turnaround", value: "2.5 Mo" }
    ],
    tags: ["Influencer Marketing", "SOP Development", "Faculty Coordination", "Apps Script Automation"],
    icon: <Users className="w-5 h-5 text-neutral-950" />
  },
  {
    title: "Gyaane CMS Content Operations",
    category: "Content Governance & Publishing",
    description: "Extensively managed the internal CMS pipeline, uploading, sanitizing, and structuring 800+ educational content entries. Implemented quality checks, standardized taxonomy, and ensured consistent tone and data integrity across web and mobile platforms.",
    metrics: [
      { label: "Entries Managed", value: "800+" },
      { label: "Data Integrity", value: "100%" },
      { label: "Pipeline", value: "CMS & QA" }
    ],
    tags: ["CMS Architecture", "Data Integrity", "Editorial Guidelines", "Publishing Workflows"],
    icon: <Database className="w-5 h-5 text-neutral-950" />
  },
  {
    title: "Personal YouTube Channel",
    category: "Independent Production & Channel Growth",
    description: "Built and actively manage a dedicated YouTube channel from zero to 260 subscribers. Independently execute the full production lifecycle: content ideation, scripting, high-retention video editing, thumbnail design, and channel analytics optimization.",
    metrics: [
      { label: "Audience Growth", value: "0 to 260" },
      { label: "Solo Execution", value: "100%" },
      { label: "Production", value: "End-to-End" }
    ],
    tags: ["Video Editing", "Content Ideation", "Creative Thumbnails", "Channel SEO"],
    icon: <Video className="w-5 h-5 text-neutral-950" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-white border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-[10vw]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 shadow-xs">
            <FolderGit2 className="w-3.5 h-3.5 text-neutral-900" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            Selected Work & Operations
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-2xl font-normal">
            Real-world execution driving massive content volume, creator partnerships, and publishing systems.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#fafafa] rounded-2xl border border-neutral-200/80 p-7 sm:p-9 hover:border-neutral-950 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-xs">
                      {project.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase font-mono tracking-wider text-neutral-500">
                        {project.category}
                      </p>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-950">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mt-3 mb-7 font-normal">
                  {project.description}
                </p>

                {/* Metrics Highlight Bar */}
                <div className="grid grid-cols-3 gap-3 p-4 sm:p-5 bg-white rounded-xl border border-neutral-200/80 mb-7 text-center shadow-xs">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">
                        {metric.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-500 mt-1 uppercase tracking-wide font-mono">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs font-mono px-3 py-1 rounded-md bg-white text-neutral-700 border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
