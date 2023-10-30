"use client";

import React, { useEffect, useState } from "react";

export const useHydration = (
	children: React.ReactNode,
	loading?: React.ReactNode | null
) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return loading;
	}

	return children;
};
