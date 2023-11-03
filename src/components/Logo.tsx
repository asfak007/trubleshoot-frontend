"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment } from "react";
import logo from "@/images/logos/logo.png";

export function Logo(props: any) {
	return (
		<Fragment>
			<Image
				src={logo}
				alt={`${process.env.APP_NAME}`}
				className={cn("relative h-9 w-16", props.className)}
				// @ts-ignore
				width="auto"
				// @ts-ignore
				height="auto"
				// width={60}
				// height={14}
				priority
			/>
		</Fragment>
	);
}
