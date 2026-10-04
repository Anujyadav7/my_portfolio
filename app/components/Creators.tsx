"use client";

import { motion } from "framer-motion";
import { creators } from "../data/creators";
import { Instagram, ArrowUpRight, Users2 } from "lucide-react";
import { useState } from "react";

const CreatorCard = ({ creator }: { creator: typeof creators[0] }) => {
  const [imgError, setImgError] = useState(false);

  const fallbackAvatar = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(creator.name)}&backgroundColor=000000&textColor=ffffff`;

  return (
    <motion.a
      href={creator.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center bg-white border border-neutral-200/80 rounded-2xl p-5 sm:p-6 hover:border-neutral-950 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group shrink-0 w-[210px] sm:w-[230px] md:w-[250px] snap-center text-center shadow-xs"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-neutral-100 rounded-full shrink-0 relative overflow-hidden mb-4 border-2 border-neutral-100 group-hover:border-neutral-950 transition-colors shadow-sm">
        <img 
          src={imgError ? fallbackAvatar : (creator.image || fallbackAvatar)}
          alt={creator.name}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="w-full">
        <h3 className="font-heading text-base sm:text-lg font-bold text-neutral-950 truncate mb-1 group-hover:text-neutral-950">
          {creator.name}
        </h3>
        <div className="inline-flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
          <Instagram className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
          <span>{creator.followers}</span>
        </div>
      </div>

      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-mono text-neutral-950 font-medium">
        <span>View Instagram</span>
        <ArrowUpRight className="w-3 h-3" />
      </div>
    </motion.a>
  );
};

export default function Creators() {
  return (
    <section id="collaborations" className="py-24 md:py-32 bg-[#fafafa] border-b border-neutral-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-[10vw]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 shadow-xs">
              <Users2 className="w-3.5 h-3.5 text-neutral-900" />
              <span>Talent Partnerships</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
              Creators I've Worked With
            </h2>
            <p className="mt-3 text-neutral-600 text-base sm:text-lg max-w-xl font-normal">
              Sourced, negotiated, and managed end-to-end campaigns with leading educational and finance creators.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-500 bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-2xs">
            Swipe / Scroll horizontally →
          </div>
        </div>

        {/* Horizontal Scroll Showcase */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 pt-2 scrollbar-thin">
          {creators.map((creator, idx) => (
            <CreatorCard key={`${creator.name}-${idx}`} creator={creator} />
          ))}
        </div>

      </div>
    </section>
  );
}
