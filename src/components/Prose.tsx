"use client";

import { cn } from "@/lib/utils";

export function Prose({
	as: Component = "div",
	className,
	enable = true,
	...props
}: ProseProps) {
	return (
		<Component
			className={cn(
				className,
				enable ? "prose dark:prose-invert" : "not-prose"
			)}
			{...props}
		/>
	);
}
