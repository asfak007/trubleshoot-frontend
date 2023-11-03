"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type ButtonProps = {
	variant?: "primary" | "secondary" | "filled" | "outline" | "text"; // Variant can be one of these values or undefined
	className?: string;
	children: any;
	arrow?: "left" | "right";
	href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variantStyles = {
	primary:
		"rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-1 dark:ring-inset dark:ring-primary-400/20 dark:hover:bg-primary-400/10 dark:hover:text-primary-300 dark:hover:ring-primary-300",
	secondary:
		"rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
	filled: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-400",
	outline:
		"rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",
	text: "text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500",
};

export function Button({
	variant = "primary",
	className,
	children,
	arrow,
	...props
}: ButtonProps) {
	className = cn(
		"inline-flex gap-0.5 justify-center items-center overflow-hidden text-sm font-medium transition",
		variantStyles[variant],
		className
	);

	let arrowIcon = (
		<ArrowIcon
			className={cn(
				"h-5 w-5",
				variant === "text" && "relative top-px",
				arrow === "left" && "-ml-1 rotate-180",
				arrow === "right" && "-mr-1",
				variant != "text" && "mt-0.5"
			)}
		/>
	);

	return (
		<>
			{props.href ? (
				<Link href={props.href} className={className} {...props}>
					{arrow === "left" && arrowIcon}
					{children}
					{arrow === "right" && arrowIcon}
				</Link>
			) : (
				<button className={className} {...props}>
					{arrow === "left" && arrowIcon}
					{children}
					{arrow === "right" && arrowIcon}
				</button>
			)}
		</>
	);
}

function ArrowIcon(props: any) {
	return (
		<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
			/>
		</svg>
	);
}

const DownloadVariantStyles: any = {
	primary:
		"bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
	secondary:
		"bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70",
};

export function DownloadButton({
	variant = "primary",
	className,
	href,
	...props
}: ButtonProps) {
	return href ? (
		<Link
			href={href}
			className={cn(
				"inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
				DownloadVariantStyles[variant],
				className
			)}
			{...props}
		/>
	) : (
		<button className={className} {...props} />
	);
}
