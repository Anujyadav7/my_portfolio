"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";
import { TetherVideo } from "../data/tetherVideos";

interface TetherCustomPlayerProps {
  video: TetherVideo;
}

export default function TetherCustomPlayer({ video }: TetherCustomPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const wasPlayingBeforeDragRef = useRef(false);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
    };
  }, []);

  // 60fps smooth scrubber animation loop
  useEffect(() => {
    let animId: number;

    const loop = () => {
      const vid = videoRef.current;
      if (vid && vid.duration && !isDraggingRef.current) {
        const cur = vid.currentTime;
        const dur = vid.duration;
        setProgress((cur / dur) * 100);
        setCurrentTime(cur);
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

  // Video event listeners
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onLoadedMetadata = () => {
      setDuration(vid.duration || 0);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    vid.addEventListener("loadedmetadata", onLoadedMetadata);
    vid.addEventListener("play", onPlay);
    vid.addEventListener("pause", onPause);
    vid.addEventListener("ended", onEnded);

    return () => {
      vid.removeEventListener("loadedmetadata", onLoadedMetadata);
      vid.removeEventListener("play", onPlay);
      vid.removeEventListener("pause", onPause);
      vid.removeEventListener("ended", onEnded);
    };
  }, []);

  // Play / Pause Toggle
  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  // Replay Video
  const restartVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;

    vid.currentTime = 0;
    vid.play().then(() => setIsPlaying(true)).catch(() => {});
    setProgress(0);
    setCurrentTime(0);
  };

  // Mute / Unmute Toggle
  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;

    const nextMuted = !vid.muted;
    vid.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Fullscreen helper
  const triggerFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {});
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  // Click on Video: opens in high quality fullscreen and plays
  const handleVideoClick = () => {
    const vid = videoRef.current;
    if (!vid) return;

    triggerFullscreen();

    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  // Seek on Timeline Bar
  const seekToClientX = useCallback(
    (clientX: number) => {
      const vid = videoRef.current;
      const bar = progressBarRef.current;
      if (!vid || !bar || !vid.duration) return;

      const rect = bar.getBoundingClientRect();
      const clampedX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const ratio = clampedX / rect.width;
      const targetTime = ratio * vid.duration;

      vid.currentTime = targetTime;
      setProgress(ratio * 100);
      setCurrentTime(targetTime);
    },
    []
  );

  // Smooth Pointer Drag Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const vid = videoRef.current;
    if (!vid || !vid.duration) return;

    isDraggingRef.current = true;
    wasPlayingBeforeDragRef.current = !vid.paused;

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

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Main 9:16 Video Player Container (No zoom, No crop, Clean HTML5) */}
      <div 
        ref={containerRef}
        onClick={handleVideoClick}
        className={`relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-sm border-0 bg-black group select-none flex flex-col justify-end cursor-pointer ${
          isFullscreen ? "!w-screen !h-screen !aspect-auto !rounded-none !border-0 flex items-center justify-center bg-black" : ""
        }`}
        title="Click to play in High Quality fullscreen"
      >
        {/* Native High-Quality 1080p Video - Zero Zoom, Zero Crop */}
        <video
          ref={videoRef}
          src={video.videoSrc}
          playsInline
          preload="metadata"
          className={`w-full h-full object-contain pointer-events-none block ${
            isFullscreen ? "max-h-screen max-w-full" : ""
          }`}
        />

        {/* Clean Controls Overlay at Bottom */}
        <div 
          className="absolute bottom-0 inset-x-0 z-30 pt-10 pb-3 px-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex items-center gap-2 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Play / Pause Button */}
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

          {/* Replay Button */}
          <button
            type="button"
            onClick={restartVideo}
            className="p-1 text-white hover:text-neutral-300 transition-colors shrink-0"
            aria-label="Replay video"
            title="Replay from start"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Smooth Draggable Scrubber Bar */}
          <div 
            ref={progressBarRef}
            onPointerDown={handlePointerDown}
            className="relative flex-1 h-6 flex items-center cursor-pointer group/bar touch-none"
            title="Drag or click to seek video"
          >
            <div suppressHydrationWarning className="w-full h-1 bg-white/30 rounded-full relative overflow-visible">
              <div 
                suppressHydrationWarning
                className="h-full bg-white rounded-full will-change-[width]"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
              <div 
                suppressHydrationWarning
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing hover:scale-125 transition-transform"
                style={{ left: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          </div>

          {/* Time Stamp */}
          <span suppressHydrationWarning className="text-[10px] font-mono text-white/80 tabular-nums shrink-0">
            {formatTime(currentTime)}
          </span>

          {/* Volume / Mute Button */}
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

          {/* Fullscreen Icon in Controls Bar */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              triggerFullscreen();
            }}
            className="p-1 text-white hover:text-neutral-300 transition-colors shrink-0"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title="Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
