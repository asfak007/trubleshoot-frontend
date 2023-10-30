"use client";
import { useEffect, useState } from "react";

export const useOrigin = (): {
	origin: any;
	hash: any;
} => {
	const [mounted, setMounted] = useState(false);
	const origin =
		typeof window !== "undefined" && window.location.origin
			? window.location.origin
			: "";

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return { origin: "", hash: "" };
	}

	return { origin: origin, hash: window.location.hash };
};
