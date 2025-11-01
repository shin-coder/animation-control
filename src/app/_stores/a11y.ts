import { atomWithStorage } from "jotai/utils";

export const isA11yEnabledAtom = atomWithStorage<boolean | undefined>(
  "accessibility:enabled",
  undefined,
);
