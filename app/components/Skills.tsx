"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Community & Creators",
    items: ["Creator Management (50+ scale)", "Outreach & Onboarding", "Social Listening", "Sentiment Analysis"],
    color: "text-[#4285F4]" // Google Blue
  },
  {
    category: "Content Operations",
    items: ["High-Volume Video Pipelines", "CMS Management (Gyaane)", "Quality Assurance", "Editorial Coordination"],
    color: "text-[#EA4335]" // Google Red
  },
  {
    category: "Performance & Strategy",
    items: ["Audience Growth (250K+)", "Data-driven Reporting", "Performance Analytics", "Cross-functional Operations"],
    color: "text-[#FBBC04]" // Google Yellow
  },
  {
    category: "Tools & Platforms",
    items: ["Google Workspace", "YouTube / IG / X", "Canva / CapCut", "DaVinci Resolve / Premiere Pro"],
    color: "text-[#34A853]" // Google Green
  }
];

export default function Skills() {
  return (
    <section className="py-20 md:py-32 bg-white relative z-10 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
         <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-16"
         >
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
             Skills & Expertise
           </h2>
           <p className="mt-4 text-gray-600 text-lg">
             A blend of technical deployment operations, creative strategy, and process optimization.
           </p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
           {skills.map((skillGroup, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white"
             >
               <h3 className={`text-lg font-bold ${skillGroup.color} mb-4 pb-2 border-b border-gray-100`}>
                 {skillGroup.category}
               </h3>
               <div className="flex flex-wrap gap-2">
                 {skillGroup.items.map((item) => (
                   <span 
                     key={item} 
                     className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                   >
                     {item}
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
