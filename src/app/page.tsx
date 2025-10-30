import FirstView from "./_components/first-view";
import VideoContents from "./_components/video-contents";
import EmblaCarousel from "@/app/_components/embla-carousel";
import { EmblaOptionsType } from "embla-carousel";
import EndBlock from "./_components/end-block";

import AnimationSwitch from "./_components/animation-switch";
import A11yProvider from "./_providers/a11y-provider";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function Home() {
  return (
    <>
      <A11yProvider>
        <AnimationSwitch />
        <FirstView />
        <VideoContents />
        <EmblaCarousel options={OPTIONS} />
        <EndBlock />
      </A11yProvider>
    </>
  );
}
