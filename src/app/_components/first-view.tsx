"use client";

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { useEffect, useRef, useState } from "react";
import { useAccessibility } from "@/app/_hooks/use-a11y";

gsap.registerPlugin(ScrambleTextPlugin);

export default function FirstView() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const { isA11yEnabled } = useAccessibility();
  const isFirstRender = useRef(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!headRef.current || !isMounted) return;

    if (isA11yEnabled) {
      // ONの場合はアニメーション実行
      gsap.to(headRef.current, {
        duration: 0.5,
        ease: "sine.in",
        scrambleText: {
          text: "Hello world",
        },
      });
    } else {
      // OFFの場合は即座にテキストを設定
      gsap.set(headRef.current, {
        text: "Hello world",
      });
    }

    // 初回フラグを下ろす
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [isA11yEnabled, isMounted]);

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
