"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { useAccessibility } from "../_hooks/use-a11y";
import { useEffect } from "react";

interface EmblaProps {
  options?: EmblaOptionsType;
}

const slides = [
  {
    id: 1,
    srcSet: "/images/sample1.jpg",
  },
  {
    id: 2,
    srcSet: "/images/sample2.jpg",
  },
  {
    id: 3,
    srcSet: "/images/sample3.jpg",
  },
  {
    id: 4,
    srcSet: "/images/sample4.jpg",
  },
  {
    id: 5,
    srcSet: "/images/sample5.jpg",
  },
];

export default function EmblaCarousel({ options }: EmblaProps) {
  const { isA11yEnabled } = useAccessibility();

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      speed: typeof window !== "undefined" && window.innerWidth < 768 ? 0.5 : 1,
    }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    if (isA11yEnabled) {
      autoScroll.play();
    } else {
      autoScroll.stop();
    }
  }, [emblaApi, isA11yEnabled]);

  return (
    <>
      <section className="w-full h-[80vh] grid place-content-center mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {slides.map(({ id, srcSet }) => (
              <p className="flex-none basis-60 pl-4 md:basis-100" key={id}>
                <Image src={srcSet} width={800} height={600} alt="" />
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
