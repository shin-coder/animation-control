import { useAtom } from "jotai";
import { isA11yEnabledAtom } from "@/app/_stores/a11y";

export function useAccessibility() {
  const [isA11yEnabled, setIsA11yEnabled] = useAtom(isA11yEnabledAtom);

  return {
    isA11yEnabled,
    setIsA11yEnabled,
  };
}
