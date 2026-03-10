"use client";

import { motion } from "framer-motion";
import { creators } from "../data/creators";
import { Instagram } from "lucide-react";

import { useState, useEffect } from "react";

const CreatorCard = ({ creator }: { creator: typeof creators[0] }) => {
  const getUsername = (url: string) => {
    try {
      const urlObj = new URL(url);
      const pathSegments = urlObj.pathname.split("/").filter(Boolean);
      return pathSegments[0] || "";
    } catch {
      return "";
    }
  };

  const username = getUsername(creator.instagram);
  const isValidUsername = username && !['reel', 'p', 'stories', 'explore'].includes(username);

  // Fallbacks
  const diceBearUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${username || creator.name}`;
  const unavatarUrl = isValidUsername
      ? `https://unavatar.io/${username}?fallback=${encodeURIComponent(diceBearUrl)}`
      : diceBearUrl;

  const initialImage = creator.image || unavatarUrl;
  const [imgSrc, setImgSrc] = useState(initialImage);

  useEffect(() => {
    // Progressively enhance with real high-res image from internal API (proxied via Threads)
    // Only fetch if we rely on generated/unavatar images, not if manual image overrides.
    if (isValidUsername && !creator.image) {
      const fetchRealProfile = async () => {
        try {
          const res = await fetch(`/api/creator?username=${username}`);
          if (res.ok) {
            const data = await res.json();
            if (data.image) {
              setImgSrc(data.image);
            }
          }
        } catch (error) {
          console.error("Failed to fetch real profile:", error);
        }
      };

      const timeout = setTimeout(fetchRealProfile, Math.random() * 2000);
      return () => clearTimeout(timeout);
    }
  }, [username, isValidUsername, creator.image]);

  return (
    <motion.a
        href={creator.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-gray-200 transition-all hover:-translate-y-1 group flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] snap-center text-center"
    >
        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-full flex-shrink-0 relative overflow-hidden group-hover:ring-4 group-hover:ring-blue-100 transition-all mb-4 sm:mb-6">
            <img 
                src={imgSrc}
                alt={creator.name}
                className="absolute inset-0 w-full h-full object-cover z-10"
                loading="lazy"
            />
        </div>
        
        <div className="overflow-hidden w-full">
            <h3 className="text-lg font-bold text-gray-900 truncate mb-1 group-hover:text-blue-600 transition-colors">
            {creator.name}
            </h3>
            <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500">
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <span className="font-medium">{creator.followers}</span>
            </div>
        </div>
    </motion.a>
  );
};

export default function Creators() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 relative z-10 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 mb-10 md:mb-12 text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
             Collaborations & Network
         </h2>
         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
             Executing scalable operations with the top 1% of creators globally.
         </p>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 sm:pb-8 scrollbar-hide py-4">
           {creators.map((creator, idx) => (
               <CreatorCard key={`${creator.name}-${idx}`} creator={creator} />
           ))}
        </div>
      </div>
    </section>
  );
}
