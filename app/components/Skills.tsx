"use client";

import { motion } from "framer-motion";
import { Settings, Megaphone, Video, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Operations & Governance",
    icon: <Settings className="w-5 h-5 text-neutral-950" />,
    description: "Systematizing daily execution, SOP standardization, and cross-team workflows.",
    skills: [
      "Operations Management",
      "Process Improvement",
      "SOP Development",
      "Quality Assurance (QA)",
      "Team Management",
      "Faculty Coordination"
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
    description: "Hands-on multimedia production and social channel scaling.",
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
    <section id="skills" className="py-24 md:py-32 bg-[#fafafa] border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-[10vw]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 shadow-xs">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white border border-neutral-200/80 rounded-2xl p-7 sm:p-9 hover:border-neutral-950 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-neutral-950 group-hover:text-white transition-colors duration-300">
                    <span className="group-hover:invert transition-all">
                      {cat.icon}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-neutral-950">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 mb-6 leading-relaxed font-normal">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium bg-neutral-50 text-neutral-800 border border-neutral-200/80 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors"
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
