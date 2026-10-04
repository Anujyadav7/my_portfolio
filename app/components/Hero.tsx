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
      className="relative w-full pt-20 lg:pt-20 pb-6 lg:pb-8 min-h-[calc(100vh-4rem)] flex items-center bg-[#fafafa] text-neutral-900 border-b border-neutral-200/80 overflow-hidden"
    >
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* 10% left and right margin on big/laptop screens */}
      <div className="w-full px-4 sm:px-6 lg:px-[10vw] relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 w-full">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:flex-1 lg:max-w-2xl xl:max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-mono text-neutral-800 shadow-2xs mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Senior Associate, Operations @ Physics Wallah</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-950 mb-1.5 leading-[1.08]">
              Anuj Yadav
            </h1>
            <p className="font-heading text-xl sm:text-2xl font-bold text-neutral-600 mb-4 tracking-tight">
              Operations & Content Specialist
            </p>

            {/* Meta details bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-3 text-xs sm:text-sm text-neutral-600 mb-4 font-mono">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-neutral-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-neutral-800" />
                Sector 62, Noida
              </span>
              <a 
                href="tel:+916393082589" 
                className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-neutral-200 hover:border-neutral-900 text-neutral-800 transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-800" />
                +91 6393082589
              </a>
              <a 
                href="mailto:infoanuj74@gmail.com" 
                className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-md border border-neutral-200 hover:border-neutral-900 text-neutral-800 transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-800" />
                infoanuj74@gmail.com
              </a>
            </div>

            {/* Executive Bio - Punchy 26 words in ~2.5 lines */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-5 font-normal">
              Operations and content specialist with <strong className="font-semibold text-neutral-950">5.5+ years of experience</strong> leading 
              EdTech workflows, faculty operations, and influencer marketing at <strong className="font-semibold text-neutral-950">Physics Wallah</strong>—systematizing 
              execution with SOPs and Management.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-5">
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold tracking-wide hover:bg-neutral-800 transition-all shadow-sm active:scale-[0.98]"
              >
                Get in Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1myNMIpEIrMn89H4ZOqMcDMzoqtStVfFw/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white text-neutral-950 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold hover:border-neutral-900 hover:bg-neutral-50 transition-all shadow-2xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a 
                href="#experience" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-neutral-500 hover:text-neutral-950 text-sm sm:text-base font-medium py-2 px-2 transition-colors"
              >
                View Experience
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Stat Highlights Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-neutral-200/80 w-full max-w-lg text-center lg:text-left">
              <div className="bg-white border border-neutral-200/80 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">5.5+</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Years Exp</p>
              </div>
              <div className="bg-white border border-neutral-200/80 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">900+</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Scripts & QA</p>
              </div>
              <div className="bg-white border border-neutral-200/80 rounded-xl p-2.5 sm:p-3 shadow-2xs">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-950">50+</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono mt-0.5">Creators Managed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Video Player Column - Prominently and harmoniously sized */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-center shrink-0"
          >
            {/* Viewport-bounded 9:16 Video Container (increased to ~535px-555px height for optimal visual balance) */}
            <div className="relative w-auto h-[min(480px,58vh)] sm:h-[min(510px,63vh)] lg:h-[min(535px,67vh)] xl:h-[min(555px,70vh)] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/15 group select-none bg-neutral-950">
              
              {/* Native Clean Video */}
              <video
                ref={videoRef}
                src="/intro_video.mp4"
                playsInline
                preload="metadata"
                onClick={togglePlay}
                className="w-full h-full object-cover scale-[1.01] cursor-pointer block"
              />

              {/* Feathered Bottom Controls */}
              <div 
                className="absolute bottom-0 inset-x-0 z-30 pt-14 pb-3.5 px-3.5 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-center gap-2.5 text-white"
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
                    <Pause className="w-3.5 h-3.5 fill-white" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-white" />
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
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                {/* 3. Buttery-Smooth Draggable & Scrubbable Timeline Bar */}
                <div 
                  ref={progressBarRef}
                  onPointerDown={handlePointerDown}
                  className="relative flex-1 h-6 flex items-center cursor-pointer group/bar touch-none"
                  title="Drag or click to seek video"
                >
                  {/* Track Background Line */}
                  <div className="w-full h-1 bg-white/30 rounded-full relative overflow-visible">
                    {/* Active Track Progress Fill */}
                    <div 
                      className="h-full bg-white rounded-full will-change-[width]"
                      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                    />
                    {/* Circular Scrubber Knob Thumb */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing hover:scale-125 transition-transform"
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
                    <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-white" />
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
