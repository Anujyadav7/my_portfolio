"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { MouseEvent, useEffect } from "react";

export default function Hero() {
  // Always initialize with 0 to prevent Server-Side-Rendering (SSR) Hydration mismatches
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Once safely mounted on the client, snap hover glow to the center
  useEffect(() => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
  }, [mouseX, mouseY]);

  // Smooth springs for parallax
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 60 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 60 });

  // Map mouse positions to distinct float speeds (parallax)
  // Assumes a typical large screen width, clamped if larger
  const blob1X = useTransform(smoothX, [0, 2000], [50, -50]);
  const blob1Y = useTransform(smoothY, [0, 1200], [50, -50]);

  const blob2X = useTransform(smoothX, [0, 2000], [-40, 40]);
  const blob2Y = useTransform(smoothY, [0, 1200], [-40, 40]);

  const blob3X = useTransform(smoothX, [0, 2000], [30, -30]);
  const blob3Y = useTransform(smoothY, [0, 1200], [-30, 30]);

  const imageParallaxX = useTransform(smoothX, [0, 2000], [-15, 15]);
  const imageParallaxY = useTransform(smoothY, [0, 1200], [-15, 15]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 lg:py-0 overflow-hidden bg-white group"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Hover Glow Background (Antigravity Cursor Follower) */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0 mix-blend-multiply"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(66, 133, 244, 0.25) 0%,
              rgba(234, 67, 53, 0.15) 35%,
              rgba(251, 188, 4, 0.1) 60%,
              rgba(52, 168, 83, 0.05) 80%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Interactive Ambient Parallax Blobs (Antigravity Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 z-0">
         <motion.div 
            style={{ x: blob1X, y: blob1Y }}
            className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#4285F4] opacity-20 blur-[120px]" 
         />
         <motion.div 
            style={{ x: blob2X, y: blob2Y }}
            className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#EA4335] opacity-15 blur-[100px]" 
         />
         <motion.div 
            style={{ x: blob3X, y: blob3Y }}
            className="absolute bottom-[0%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#FBBC04] opacity-20 blur-[100px]" 
         />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 xl:gap-32">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[50%] text-center lg:text-left relative z-10 flex flex-col items-center lg:items-start"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-gray-100 rounded-full text-sm font-medium text-gray-700">
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
                <span className="w-2 h-2 rounded-full bg-[#FBBC04]"></span>
                <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
              </div>
              <span className="ml-1">Open to Content & Creator Specialist Roles</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-gray-900 mb-6 font-['Product_Sans',_Roboto,_sans-serif] leading-tight flex flex-col items-center lg:items-start">
              <span>Hi, I'm</span>
              <span className="inline-block mt-0 sm:mt-1">
                <span className="text-[#4285F4]">A</span>
                <span className="text-[#EA4335]">n</span>
                <span className="text-[#FBBC04]">u</span>
                <span className="text-[#34A853]">j</span>
              </span>
            </h1>
            
            <p className="text-base md:text-lg xl:text-xl text-gray-600 mb-8 max-w-xl lg:max-w-md xl:max-w-xl leading-relaxed text-center lg:text-left">
              Content & Operations Specialist. Reviewed and supervised 900+ scripts and videos for quality and compliance at <strong className="font-extrabold text-[#4285F4]">Physics Wallah</strong>. Expert in leveraging data and spreadsheets to investigate trends, drive strategy, and manage large-scale content pipelines securely.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="https://drive.google.com/file/d/1JgkprImqecIZ2UEGocsSNo81IHE6R95N/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#4285F4] text-white px-8 py-3.5 rounded-full font-medium transition-all hover:bg-[#3367D6] hover:shadow-lg hover:shadow-[#4285F4]/20 active:scale-95 w-full sm:w-auto justify-center"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
              <a 
                href="#projects" 
                className="group flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-full font-medium transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95 w-full sm:w-auto justify-center"
              >
                View Content Operations
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ x: imageParallaxX, y: imageParallaxY }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[420px]">
              {/* Profile Image with 5% precise curve + floating parallax */}
              <div className="relative overflow-hidden w-full h-auto shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_70px_-15px_rgba(66,133,244,0.15)] transition-shadow duration-700 bg-gray-50/50" style={{ borderRadius: "5%" }}>
                 <motion.img 
                   src="/profile.webp" 
                   alt="Anuj Yadav" 
                   className="w-full h-auto object-cover"
                   whileHover={{ scale: 1.03 }}
                   transition={{ duration: 0.5, ease: "easeOut" }}
                 />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
