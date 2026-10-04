"use client";

import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Download, ArrowDown, MapPin, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const wasPlayingBeforeDragRef = useRef(false);

  // 60fps smooth scrubber animation loop
  useEffect(() => {
    let animId: number;

    const loop = () => {
      const video = videoRef.current;
      if (video && video.duration && !isDraggingRef.current) {
        const ratio = video.currentTime / video.duration;
        setProgress(ratio * 100);
      }
      if (isPlaying) {
        animId = requestAnimationFrame(loop);
      }
    };

    if (isPlaying) {
      animId = requestAnimationFrame(loop);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);

    const onLoadedMetadata = () => {
      setDuration(video.duration || 0);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().then(() => setIsPlaying(true)).catch(() => {});
    setProgress(0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Calculate ratio from clientX and apply seek
  const seekToClientX = useCallback((clientX: number) => {
    const video = videoRef.current;
    const bar = progressBarRef.current;
    if (!video || !bar || !video.duration) return;

    const rect = bar.getBoundingClientRect();
    const clampedX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const ratio = clampedX / rect.width;

    video.currentTime = ratio * video.duration;
    setProgress(ratio * 100);
  }, []);

  // Smooth Drag & Slide Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRef.current;
    if (!video || !video.duration) return;

    isDraggingRef.current = true;
    wasPlayingBeforeDragRef.current = !video.paused;

    seekToClientX(e.clientX);

    const onPointerMove = (moveEvent: PointerEvent) => {
      if (!isDraggingRef.current) return;
      seekToClientX(moveEvent.clientX);
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      if (wasPlayingBeforeDragRef.current && videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] flex items-center pt-28 pb-20 lg:py-28 bg-[#fafafa] text-neutral-900 border-b border-neutral-200/80 overflow-hidden"
    >
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* 10% left and right margin on big/laptop screens */}
      <div className="w-full px-4 sm:px-6 lg:px-[10vw] relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm text-xs font-mono text-neutral-800 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Senior Associate, Operations @ Physics Wallah</span>
            </div>

            {/* Main Heading with Outfit */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 mb-3 leading-[1.05]">
              Anuj Yadav
            </h1>
            <p className="font-heading text-2xl sm:text-3xl font-semibold text-neutral-600 mb-6 tracking-tight">
              Operations & Content Specialist
            </p>

            {/* Meta details bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-neutral-500 mb-6 font-mono">
              <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-neutral-700" />
                Sector 62, Noida
              </span>
              <a 
                href="tel:+916393082589" 
                className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-neutral-200 hover:border-neutral-900 text-neutral-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-700" />
                +91 6393082589
              </a>
              <a 
                href="mailto:infoanuj74@gmail.com" 
                className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-neutral-200 hover:border-neutral-900 text-neutral-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-700" />
                infoanuj74@gmail.com
              </a>
            </div>

            {/* Executive Bio */}
            <p className="text-base sm:text-lg md:text-[18px] text-neutral-600 leading-[1.8] mb-8 max-w-2xl font-normal">
              Operations and content professional with <strong className="font-semibold text-neutral-950">5.5 years of experience</strong> across 
              EdTech operations, influencer marketing, video production, and social media management. Currently orchestrating influencer deals, faculty coordination, 
              quality governance, CMS pipelines, and cross-functional teams at <strong className="font-semibold text-neutral-950">Physics Wallah</strong>. Skilled in building SOPs 
              and leveraging AI workflows and automation scripts to systematize daily work.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 text-white px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-md shadow-neutral-950/10 active:scale-[0.98]"
              >
                Get in Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1myNMIpEIrMn89H4ZOqMcDMzoqtStVfFw/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white text-neutral-950 px-8 py-3.5 rounded-xl text-sm font-semibold hover:border-neutral-900 hover:bg-neutral-50 transition-all shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a 
                href="#experience" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-neutral-500 hover:text-neutral-950 text-sm font-medium py-3 px-3 transition-colors"
              >
                View Experience
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Stat Highlights Cards */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 mt-8 border-t border-neutral-200/80 w-full max-w-xl text-center lg:text-left">
              <div className="bg-white/80 border border-neutral-200/80 rounded-xl p-3 sm:p-4 shadow-xs">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">5.5+</p>
                <p className="text-[11px] sm:text-xs text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Years Exp</p>
              </div>
              <div className="bg-white/80 border border-neutral-200/80 rounded-xl p-3 sm:p-4 shadow-xs">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">900+</p>
                <p className="text-[11px] sm:text-xs text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Scripts & QA</p>
              </div>
              <div className="bg-white/80 border border-neutral-200/80 rounded-xl p-3 sm:p-4 shadow-xs">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">50+</p>
                <p className="text-[11px] sm:text-xs text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Creators Managed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Video Player Column (Completely Borderless & Smooth Bottom Shadow) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-[40%] flex flex-col items-center justify-center"
          >
            {/* Edge-to-edge container without any black border or dark background */}
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] md:max-w-[325px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] group select-none bg-transparent">
              
              {/* Native Clean Video - scaled 101% to prevent any subpixel background lines */}
              <video
                ref={videoRef}
                src="/intro_video.mp4"
                playsInline
                preload="metadata"
                onClick={togglePlay}
                className="w-full h-full object-cover scale-[1.01] cursor-pointer block"
              />

              {/* Ultra-Smooth Feathery Bottom Shadow with Custom Controls */}
              <div 
                className="absolute bottom-0 inset-x-0 z-30 pt-16 pb-4 px-4 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-center gap-3 text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 1. Play / Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-1 text-white hover:text-neutral-300 transition-colors shrink-0"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white" />
                  )}
                </button>

                {/* 2. Replay / Restart Button */}
                <button
                  type="button"
                  onClick={restartVideo}
                  className="p-1 text-white hover:text-neutral-300 transition-colors shrink-0"
                  aria-label="Replay video"
                  title="Replay from start"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* 3. Buttery-Smooth Draggable & Scrubbable Timeline Bar */}
                <div 
                  ref={progressBarRef}
                  onPointerDown={handlePointerDown}
                  className="relative flex-1 h-7 flex items-center cursor-pointer group/bar touch-none"
                  title="Drag or click to seek video"
                >
                  {/* Track Background Line */}
                  <div className="w-full h-1.5 bg-white/30 rounded-full relative overflow-visible">
                    {/* Active Track Progress Fill */}
                    <div 
                      className="h-full bg-white rounded-full will-change-[width]"
                      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                    />
                    {/* Circular Scrubber Knob Thumb */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full shadow-[0_1px_5px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing hover:scale-125 transition-transform"
                      style={{ left: `${Math.min(100, Math.max(0, progress))}%` }}
                    />
                  </div>
                </div>

                {/* 4. Speaker / Volume Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-1 text-white hover:text-neutral-300 transition-colors shrink-0"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-neutral-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
