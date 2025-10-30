"use client";

import { useAccessibility } from "@/app/_hooks/use-a11y";
import { useRef, useEffect } from "react";

export default function VideoContents() {
  const { isA11yEnabled } = useAccessibility();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isA11yEnabled) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isA11yEnabled]);

  return (
    <>
      <section className="w-full">
        <video
          ref={videoRef}
          className="w-200 mx-auto aspect-video"
          muted
          loop
          playsInline
        >
          <source src="/video/sample-movie.mp4" />
        </video>
      </section>
    </>
  );
}
