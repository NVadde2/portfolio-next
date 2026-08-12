"use client";

import { create } from "zustand";

interface NavState {
  mobileOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useNavStore = create<NavState>((set) => ({
  mobileOpen: false,
  toggle: () => set((s) => ({ mobileOpen: !s.mobileOpen })),
  close: () => set({ mobileOpen: false }),
}));
