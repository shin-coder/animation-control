"use client";

import { Switch } from "@/components/ui/switch";
import { useAccessibility } from "@/app/_hooks/use-a11y";
import { useEffect, useState } from "react";

export default function AnimationSwitch() {
  const { isA11yEnabled, setIsA11yEnabled } = useAccessibility();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="absolute top-10 left-5 flex items-center space-x-2 md:left-20">
        <p className="font-semibold">Animation</p>
        <label htmlFor="animation-control ">
          <span className="text-sm">ON</span>
        </label>
        <Switch
          id="animation-control"
          checked={isA11yEnabled}
          onCheckedChange={setIsA11yEnabled}
        />
        <label htmlFor="animation-control">
          <span className="text-sm">OFF</span>
        </label>
      </div>
    </>
  );
}
