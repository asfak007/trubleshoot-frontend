"use client";
import { create } from "zustand";

interface useAlertModalStore {
	isOpen: boolean;
	isLoading: boolean;
	onOpen: () => void;
	onClose: () => void;
	onLoading: () => void;
}

export const useAlertModal = create<useAlertModalStore>((set) => ({
	isOpen: false,
	isLoading: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	onLoading: () => set({ isLoading: false }),
}));
