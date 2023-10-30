"use client";
import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import BlurImage from "@/components/BlurImage";
import heroImage from "@/images/hero.png";
import { Heading } from "./Heading";

export const Pattern = ({ className, ...props }: { className?: string }) => {
	return (
		<Fragment>
			<div
				className={cn(
					"absolute inset-0 -z-10 mx-0 max-w-full overflow-hidden",
					className
				)}
				{...props}
			>
				<div className="absolute left-1/2 top-0 ml-[-38rem] h-[42rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
					<div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-200 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary-400/30 dark:to-primary-200/30 dark:opacity-100"></div>
					<svg
						viewBox="0 0 1113 440"
						aria-hidden="true"
						className="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-primary-400/10 blur-[26px] hidden"
					>
						<path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
					</svg>
				</div>
			</div>
		</Fragment>
	);
};
