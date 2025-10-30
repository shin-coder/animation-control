"use client";

import { Provider } from "jotai";
import { ReactNode } from "react";

interface A11yProviderProps {
  children: ReactNode;
}

export default function A11yProvider({ children }: A11yProviderProps) {
  return <Provider>{children}</Provider>;
}
