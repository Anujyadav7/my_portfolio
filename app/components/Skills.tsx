"use client";

import { motion } from "framer-motion";
import { Sparkles, Video, Megaphone, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "AI Filmmaking & Generative Tools",
    icon: <Sparkles className="w-5 h-5 text-neutral-950" />,
    description: "End-to-end AI video and image pipelines from concept, character sheets, and generation to sound and subtitles.",
    skills: [
      "AI Video: Seedance, Google Veo (Flow), MiniMax, LTX",
      "AI Images: Higgsfield, OpenArt AI",
      "Prompt Engineering (Image & Video)",
      "Character Design & Consistency",
      "AI Tools: ChatGPT, Claude, Gemini, Canva"
    ]
  },
  {
    title: "Video Editing & Post-Production",
    icon: <Video className="w-5 h-5 text-neutral-950" />,
    description: "Multi-software video editing, retention-focused pacing, colour grading, sound design, and multi-format delivery.",
    skills: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut",
      "Colour Grading",
      "Sound Design & Audio Foley",
      "Social Media Video (YouTube, Reels, Shorts)",
      "Subtitles & Captions"
    ]
  },
  {
    title: "Storytelling, QC & Marketing",
    icon: <Megaphone className="w-5 h-5 text-neutral-950" />,
    description: "Narrative architecture, shot planning, editorial quality control, influencer partnerships, and audience growth.",
    skills: [
      "Storytelling & Narrative Pacing",
      "Scriptwriting & Shot Lists",
      "Content Ideation",
      "Script and Video QC",
      "Digital Marketing",
      "Influencer Campaigns",
      "Deal Outreach & Negotiation",
      "Creative Design & Thumbnails"
    ]
  },
  {
    title: "Operations, Leadership & Tech",
    icon: <Cpu className="w-5 h-5 text-neutral-950" />,
    description: "Standardizing team execution with SOPs, automated reporting pipelines, CMS governance, and web code.",
    skills: [
      "Project Management",
      "SOPs & Team Leadership",
      "Quality Assurance (QA)",
      "Process Improvement",
      "CMS Taxonomy & Handling",
      "Google Sheets & Apps Script",
      "HTML, CSS, JavaScript"
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
