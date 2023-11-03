"use client";
import { create } from "zustand";

export const useMobileNavigationStore = create<MobileNavigationState>(
	(set) => ({
		isOpen: false,
		open: () => set({ isOpen: true }),
		close: () => set({ isOpen: false }),
		toggle: () => set((state) => ({ isOpen: !state.isOpen })),
	})
);
