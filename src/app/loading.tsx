"use client";

import { Loader } from "@/components/ui/loader";

const Loading = () => {
	return (
		<div className="fixed inset-0 flex h-full min-h-screen w-screen items-center justify-center z-50 mx-auto">
			<Loader />
		</div>
	);
};

export default Loading;
