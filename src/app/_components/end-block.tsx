"use client";

import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useAccessibility } from "../_hooks/use-a11y";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

export default function EndBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const splitRef = useRef<SplitText | null>(null);
  const { isA11yEnabled } = useAccessibility();

  useGSAP(() => {
    if (!sectionRef || !headRef) return;

    if (splitRef.current) {
      splitRef.current.revert();
      splitRef.current = null;
    }

    if (isA11yEnabled) {
      const split = new SplitText(headRef.current, {
        type: "lines, chars",
        mask: "lines",
        autoSplit: true,
      });
      splitRef.current = split;

      gsap.from(split.chars, {
        yPercent: 80,
        stagger: 0.05,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      });
    } else {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(headRef.current);

      gsap.set(headRef.current, {
        clearProps: "all",
      });
    }
  }, [isA11yEnabled]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isA11yEnabled) return;

    e.preventDefault();

    gsap.to(window, {
      duration: 1,
      scrollTo: "#top",
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <section
        className="w-full h-screen grid place-content-center"
        ref={sectionRef}
      >
        <h1
          className="text-5xl font-bold text-center leading-relaxed"
          ref={headRef}
        >
          See you
        </h1>
        <div className="mt-5 mx-auto group flex flex-col gap-0.5">
          <Link
            className="text-center"
            href="#top"
            ref={anchorRef}
            onClick={handleAnchor}
          >
            back to top
          </Link>
          <span
            className={cn("inline-block w-0 h-px bg-black", [
              isA11yEnabled
                ? "group-hover:w-full duration-300 transition-all"
                : "group-hover:w-full",
            ])}
          ></span>
        </div>
      </section>
    </>
  );
}
