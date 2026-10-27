"use client";

import { motion } from "framer-motion";
import { Settings, Megaphone, Video, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Operations & Governance",
    icon: <Settings className="w-5 h-5 text-neutral-950" />,
    description: "Systematizing high-volume daily execution, SOP standardization, faculty operations, and cross-team workflow governance.",
    skills: [
      "Operations Management",
      "Process Improvement",
      "SOP Development",
      "Quality Assurance (QA)",
      "Team Management",
      "Faculty Coordination",
      "Workflow Governance"
    ]
  },
  {
    title: "Influencer & Content Strategy",
    icon: <Megaphone className="w-5 h-5 text-neutral-950" />,
    description: "End-to-end creator scouting, high-volume contract negotiation, and content direction.",
    skills: [
      "Influencer Marketing",
      "Outreach & Deal Negotiation",
      "Content Ideation",
      "Script & Video Review",
      "User Feedback & App Improvement",
      "Cross-functional Collaboration"
    ]
  },
  {
    title: "Media Production & Channels",
    icon: <Video className="w-5 h-5 text-neutral-950" />,
    description: "Hands-on multimedia production, pacing, and social channel scaling.",
    skills: [
      "Video Editing (Shorts & Long-form)",
      "Creative Design & Thumbnails",
      "YouTube Channel Management",
      "Instagram Operations",
      "Publishing Schedules & Retention",
      "Community Moderation"
    ]
  },
  {
    title: "Technical & Automation",
    icon: <Cpu className="w-5 h-5 text-neutral-950" />,
    description: "Automating reporting pipelines and leveraging modern AI workflows.",
    skills: [
      "CMS Handling & Taxonomy",
      "Data Scraping & Extraction",
      "Google Sheets (Advanced Data)",
      "Google Apps Script (Automation)",
      "AI Tools (ChatGPT, Gemini, Claude)",
      "Workflow Streamlining"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-[10vw]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-10 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-[#fafafa] text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-neutral-900" />
            <span>Core Competencies</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            Skills & Capabilities
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-2xl font-normal">
            A battle-tested blend of operational rigor, creator partnership execution, and modern automation.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="bg-[#fafafa] border border-neutral-200/90 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <span className="group-hover:invert transition-all">
                      {cat.icon}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-neutral-950">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 mb-3.5 leading-relaxed font-normal">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/70 mt-auto">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors shadow-2xs"
                  >
                    {skill}
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
