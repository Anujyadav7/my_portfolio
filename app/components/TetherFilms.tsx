"use client";

import { motion } from "framer-motion";
import { Film, Download, ExternalLink, CheckCircle2 } from "lucide-react";
import TetherCustomPlayer from "./TetherCustomPlayer";
import { tetherVideos } from "../data/tetherVideos";

export default function TetherFilms() {
  return (
    <section 
      id="tether-films" 
      className="relative w-full pt-20 sm:pt-24 pb-16 bg-white text-neutral-900 border-b border-neutral-200/80 overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-[6vw] xl:px-[8vw] relative z-10">
        
        {/* Top Header: Welcome to Tether Hiring Team */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-[#fafafa] text-neutral-800 text-xs font-mono uppercase tracking-wider mb-3.5 shadow-2xs">
            <Film className="w-3.5 h-3.5 text-neutral-950" />
            <span>Tether Submission • AI Filmmaker Application</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 mb-3.5 leading-tight">
            Welcome, Tether Hiring Team 👋
          </h1>

          {/* Message & 30-Day Commitment */}
          <div className="space-y-3 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              I created these <strong className="text-neutral-950 font-semibold">4 sample concept films</strong> specifically for your team to demonstrate creative vision across <strong className="text-neutral-950 font-semibold">Hadron</strong>, <strong className="text-neutral-950 font-semibold">Tether Gold</strong>, and <strong className="text-neutral-950 font-semibold">USDT</strong>. All 4 are displayed below on one screen so you can review them side by side.
            </p>
            <div className="p-4 rounded-xl bg-[#fafafa] border border-neutral-200/80 text-neutral-800 text-sm sm:text-base text-left sm:text-center shadow-2xs">
              <span className="italic font-medium">“I know it&apos;s not too much perfect, but if you can work with me just <strong>30 days</strong>, we will make better output with better video generation models.”</span>
            </div>
          </div>

          {/* Pipeline Pills & Job Link */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 text-xs font-mono text-neutral-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fafafa] border border-neutral-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />
              Self-Hosted LTX 2.5 & Google Flow
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fafafa] border border-neutral-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" />
              Consistent Character Sheets & Audio Foley
            </span>
            <a
              href="https://careers.tether.io/o/ai-filmmaker-100-remote-worldwide-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors shadow-2xs"
            >
              <span>Tether Job Posting</span>
              <ExternalLink className="w-3 h-3 text-neutral-300" />
            </a>
          </div>
        </motion.div>

        {/* 4 Videos Visible Together on One Screen (4-Column Layout on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {tetherVideos.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#fafafa] rounded-2xl border border-neutral-200/90 p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-neutral-300/80 transition-all duration-300 group"
            >
              {/* 1. Video Player & View in Full Screen Button */}
              <div className="w-full mb-4">
                <TetherCustomPlayer video={item} />
              </div>

              {/* 2. Film Metadata & Exact Verbatim Storyline */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                      {item.product}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white text-neutral-700 border border-neutral-200">
                      {item.modelBadge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-neutral-950 mb-2.5">
                    {item.title}
                  </h3>

                  {/* Verbatim Storyline & Technical Notes */}
                  <div className="space-y-2 text-neutral-700 text-xs leading-relaxed mb-4 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                    {item.storyline.map((paragraph, pIdx) => (
                      <p key={pIdx} className="font-normal">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 3. Download Video Button with Google Drive Link */}
                <div className="pt-3 border-t border-neutral-200/80">
                  <a
                    href={item.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wide transition-all shadow-2xs active:scale-[0.99]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Video</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
