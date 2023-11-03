"use client";

import { Toaster, toast } from "sonner";

export const ToastProvider = () => {
	return (
		<Toaster
			//  richColors
			duration={4000}
			expand={true}
		/>
	);
};
