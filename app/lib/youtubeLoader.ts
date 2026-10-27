// Centralized YouTube IFrame API Loader

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YTCallback = () => void;

let isScriptLoading = false;
let isScriptReady = false;
const callbacks: YTCallback[] = [];

export function loadYouTubeIframeApi(callback: YTCallback) {
  if (typeof window === "undefined") return;

  if (window.YT && window.YT.Player) {
    callback();
    return;
  }

  callbacks.push(callback);

  if (isScriptReady) {
    callback();
    return;
  }

  if (isScriptLoading) return;

  isScriptLoading = true;

  const prevOnReady = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    if (prevOnReady) prevOnReady();
    isScriptReady = true;
    callbacks.forEach((cb) => cb());
    callbacks.length = 0;
  };

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  tag.async = true;
  document.head.appendChild(tag);
}
