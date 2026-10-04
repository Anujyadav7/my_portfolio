"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, 
  ShieldCheck, 
  Cpu, 
  Video, 
  Globe, 
  Sparkles, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Briefcase
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#fafafa] border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-[10vw]">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-neutral-900" />
            <span>Career Journey & Leadership</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            Work Experience
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-2xl font-normal">
            5.5+ years of operational excellence in EdTech, influencer partnerships, and digital production.
          </p>
        </motion.div>

        <div className="space-y-20">
          
          {/* ============================================================== */}
          {/* ROLE 1: PHYSICS WALLAH */}
          {/* ============================================================== */}
          <div className="space-y-8">
            {/* Role Header & Lead Statement */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
                <div>
                  <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                    Current Position
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">
                    Senior Associate, Operations
                  </h3>
                  <p className="text-base font-semibold text-neutral-700 mt-0.5">
                    Physics Wallah
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-600">
                  <span className="inline-flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    Apr 2025 - Present
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    Noida, India
                  </span>
                </div>
              </div>

              {/* Exact Requested Summary Text */}
              <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Leading high-scale influencer marketing operations, faculty workflows, and cross-functional quality assurance to drive educational content delivery.
              </p>
            </div>

            {/* Cards Grid for Physics Wallah (Matching Reference Card Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Influencer Marketing */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Soft Blue Icon Squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Megaphone className="w-6 h-6" />
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
                    Influencer Marketing
                  </h4>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed font-normal">
                    Creator scouting, deal negotiation, and closing at scale.
                  </p>

                  <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed mb-8">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Source and shortlist influencers aligned with educational campaigns</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Hold strategic alignment meetings and close collaboration deals</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Manage and coordinate 50+ creator partnerships simultaneously</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Track engagement benchmarks and creator delivery timelines</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-950 group-hover:gap-2.5 transition-all">
                  <span>50+ Creators Managed</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-700" />
                </div>
              </motion.div>

              {/* Card 2: QA & Content Operations */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Soft Green Icon Squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
                    Quality Assurance & CMS
                  </h4>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed font-normal">
                    Rigorous editorial supervision & pipeline integrity.
                  </p>

                  <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed mb-8">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Review 900+ scripts and videos for quality & compliance prior to release</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Coordinate with faculty on teaching schedules & syllabus delivery</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Manage content uploads, taxonomies, and updates on internal CMS</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Maintain zero-error editorial consistency across publishing platforms</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-950 group-hover:gap-2.5 transition-all">
                  <span>900+ Videos Supervised</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-700" />
                </div>
              </motion.div>

              {/* Card 3: Team & Process Automation */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Soft Purple Icon Squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
                    Team Leadership & SOPs
                  </h4>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed font-normal">
                    Standardized workflows & automated reporting engines.
                  </p>

                  <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed mb-8">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Manage an operations team and write SOPs standardizing daily work</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Call students and users, resolve queries, and drive app improvements</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Contribute content ideas for YouTube and Instagram channel management</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Scrape data and build Google Sheets & Apps Script automated reports</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-950 group-hover:gap-2.5 transition-all">
                  <span>Automated Operations</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-700" />
                </div>
              </motion.div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* ROLE 2: FREELANCE & SOCIAL MEDIA MANAGER */}
          {/* ============================================================== */}
          <div className="space-y-8 pt-8 border-t border-neutral-200/80">
            {/* Role Header & Lead Statement */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
                <div>
                  <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                    Previous Position
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">
                    Freelance & Social Media Manager
                  </h3>
                  <p className="text-base font-semibold text-neutral-700 mt-0.5">
                    Independent Practice
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-600">
                  <span className="inline-flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    Apr 2021 - 2025
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    Remote
                  </span>
                </div>
              </div>

              {/* Exact Requested Summary Text */}
              <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Delivered digital content operations, high-retention video post-production, and social channel management for brands and creators.
              </p>
            </div>

            {/* Cards Grid for Freelance Role (Matching Reference Card Style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Video Editing */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Soft Amber Icon Squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Video className="w-6 h-6" />
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
                    Video Editing & Production
                  </h4>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed font-normal">
                    High-retention editing built for audience watch time.
                  </p>

                  <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed mb-8">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Edit high-retention short and long-form videos for multiple clients</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Refine narrative pacing, retention hooks, transitions, and audio mix</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Format and export tailored aspect ratios for YouTube and Instagram</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Maintain prompt client delivery turnaround without quality compromise</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-950 group-hover:gap-2.5 transition-all">
                  <span>High-Retention Content</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-700" />
                </div>
              </motion.div>

              {/* Card 2: Channel Management */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Soft Blue Icon Squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
                    Channel & Social Operations
                  </h4>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed font-normal">
                    Comprehensive channel upkeep and publishing cadence.
                  </p>

                  <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed mb-8">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Manage client YouTube channels end-to-end, including metadata and uploads</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Execute consistent distribution schedules on YouTube and Instagram</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Engage communities, moderate comment streams, and track growth signals</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Optimize titles, descriptions, and tags for discoverability and SEO</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-950 group-hover:gap-2.5 transition-all">
                  <span>Channel Upkeep & Growth</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-700" />
                </div>
              </motion.div>

              {/* Card 3: Creative Design & AI Tools */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Soft Rose Icon Squircle */}
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-neutral-950 mb-2">
                    Creative Design & AI Workflows
                  </h4>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed font-normal">
                    Click-worthy thumbnails & accelerated AI research.
                  </p>

                  <ul className="space-y-3 text-neutral-600 text-sm leading-relaxed mb-8">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Design creatives and click-worthy thumbnails for high CTR</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Use AI tools (ChatGPT, Gemini, Claude) to accelerate research</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Rapidly draft script ideas, hooks, and competitor content benchmarks</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                      <span>Maintain a rich library of reusable graphics and visual templates</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-950 group-hover:gap-2.5 transition-all">
                  <span>AI-Accelerated Output</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-700" />
                </div>
              </motion.div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* EDUCATION */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-neutral-200/80 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs hover:border-neutral-950 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 text-neutral-950 flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase font-mono tracking-wider text-neutral-500">Academic Background</p>
                <h4 className="font-heading text-xl font-bold text-neutral-950">Master's in Sociology</h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">Foundational grounding in human behavior, social trends & qualitative analysis</p>
              </div>
            </div>
            <div className="text-xs font-mono px-4 py-2 rounded-xl bg-neutral-50 text-neutral-800 border border-neutral-200 self-start sm:self-center font-medium shadow-2xs">
              Graduated 2023
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
