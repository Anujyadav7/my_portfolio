"use client";

import { motion } from "framer-motion";
import { Youtube, Users, Database } from "lucide-react";

const projects = [
  {
    title: "Physics Wallah Operations",
    description: "Managed 50+ creators simultaneously, supervising 900+ scripts and videos within 2.5 months. Maintained large datasets via Google Sheets to track creator performance and delivery timelines.",
    tags: ["Creator Coordination", "QA", "Google Sheets"],
    icon: <Users className="w-5 h-5 text-[#4285F4]" />, // Google Blue
    bgColor: "bg-[#4285F4]/10",
    borderColor: "border-[#4285F4]/20"
  },
  {
    title: "Gyaane CMS Management",
    description: "Worked extensively on the internal CMS project, uploading, sanitizing, and managing 800+ content entries with high accuracy while ensuring consistency in content tone and structure.",
    tags: ["CMS Operations", "Content Publishing", "Data Integrity"],
    icon: <Database className="w-5 h-5 text-[#EA4335]" />, // Google Red
    bgColor: "bg-[#EA4335]/10",
    borderColor: "border-[#EA4335]/20"
  },
  {
    title: "YouTube: 'Alfact'",
    description: "Built and scaled an educational YouTube channel to 250K+ subscribers in 6 months. Independently managed the entire content lifecycle: ideation, scripting, editing, SEO, and analytics.",
    tags: ["Audience Growth", "Analytics", "Independent Creation"],
    icon: <Youtube className="w-5 h-5 text-[#FF0000]" />, // True YouTube Red
    bgColor: "bg-[#FF0000]/10",
    borderColor: "border-[#FF0000]/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 relative z-10 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Professional Impact
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl">
            A showcase of high-volume content operations and audience growth capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-12 h-12 ${project.bgColor} rounded-xl flex items-center justify-center mb-6 border ${project.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                <div className="transition-colors">
                  {project.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 group-hover:border-gray-300 transition-colors">
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
