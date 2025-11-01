"use client";

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { useEffect, useRef, useState } from "react";
import { useAccessibility } from "@/app/_hooks/use-a11y";

gsap.registerPlugin(ScrambleTextPlugin);

export default function FirstView() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const { isA11yEnabled } = useAccessibility();
  // const isFirstRender = useRef(true);
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  useEffect(() => {
    if (!headRef.current || !isA11yEnabled) return;

    gsap.to(headRef.current, {
      duration: 0.5,
      ease: "sine.in",
      scrambleText: {
        text: "Hello world",
      },
    });
  }, [isA11yEnabled]);

  return (
    <>
      <section id="top" className="w-full h-screen grid place-content-center">
        <h1 className="text-5xl font-bold" ref={headRef}>
          Hello world
        </h1>
      </section>
    </>
  );
}
