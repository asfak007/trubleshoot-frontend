"use client";

import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Script from "next/script";
import { Button } from "@/components/Button";
import BlurImage from "@/components/BlurImage";
import { cn } from "@/lib/utils";

export default function Tooltip({
	children,
	content,
	fullWidth,
}: {
	children: ReactNode;
	content: ReactNode | string;
	fullWidth?: boolean;
}) {
	const [openTooltip, setOpenTooltip] = useState(false);
	const mobileTooltipRef = useRef(null);

	const controls = useAnimation();
	const transitionProps = { type: "spring", stiffness: 500, damping: 30 };

	async function handleDragEnd(_: any, info: any) {
		const offset = info.offset.y;
		const velocity = info.velocity.y;
		// @ts-ignore
		const height = mobileTooltipRef.current.getBoundingClientRect().height;
		if (offset > height / 2 || velocity > 800) {
			await controls.start({ y: "100%", transition: transitionProps });
			setOpenTooltip(false);
		} else {
			controls.start({ y: 0, transition: transitionProps });
		}
	}

	return (
		<>
			<button
				type="button"
				className={cn(
					fullWidth ? "w-full" : "inline-flex",
					"sm:hidden"
				)}
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					setOpenTooltip(true);
				}}
			>
				<span className="sr-only">Open tooltip</span>
				{children}
			</button>
			<AnimatePresence>
				{openTooltip && (
					<>
						<motion.div
							ref={mobileTooltipRef}
							key="mobile-tooltip"
							className="group fixed inset-x-0 bottom-0 z-40 w-screen cursor-grab active:cursor-grabbing sm:hidden"
							initial={{ y: "100%" }}
							animate={{
								y: openTooltip ? 0 : "100%",
								transition: transitionProps,
							}}
							exit={{ y: "100%" }}
							transition={transitionProps}
							drag="y"
							dragDirectionLock
							onDragEnd={handleDragEnd}
							dragElastic={{ top: 0, bottom: 1 }}
							dragConstraints={{ top: 0, bottom: 0 }}
						>
							<div
								className={`rounded-t-4xl flex h-7 w-full items-center justify-center border-t border-gray-200 dark:border-white/7.5 bg-white dark:bg-zinc-500/75`}
							>
								<div className="-mr-1 h-1 w-6 rounded-full bg-gray-300  dark:bg-zinc-50  transition-all group-hover:rotate-12 group-active:rotate-12" />
								<div className="-mr-1 h-1 w-6 rounded-full bg-gray-300  dark:bg-zinc-50 transition-all group-hover:-rotate-12 group-active:-rotate-12" />
							</div>
							<div className="flex min-h-[180px] w-full items-center justify-center overflow-hidden bg-white dark:bg-zinc-500/75 align-middle shadow-xl">
								{typeof content === "string" ? (
									<span className="block max-w-xs text-center text-sm text-gray-700 dark:text-zinc-300">
										{content}
									</span>
								) : (
									content
								)}
							</div>
						</motion.div>
						<motion.div
							key="mobile-tooltip-backdrop"
							className="fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur sm:hidden "
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setOpenTooltip(false)}
						/>
					</>
				)}
			</AnimatePresence>
			<TooltipPrimitive.Provider delayDuration={100}>
				<TooltipPrimitive.Root>
					<TooltipPrimitive.Trigger
						className="hidden sm:inline-flex"
						asChild
					>
						{children}
					</TooltipPrimitive.Trigger>
					<TooltipPrimitive.Content
						sideOffset={4}
						side="top"
						className="z-50 hidden animate-slide-up-fade items-center overflow-hidden rounded-md border drop-shadow-lg sm:block border-zinc-900/7.5 dark:border-white/7.5 bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)] backdrop-blur-sm dark:backdrop-blur "
					>
						<TooltipPrimitive.Arrow className="fill-current text-white" />
						{typeof content === "string" ? (
							<div className="p-4">
								<span className="block max-w-xs text-center text-sm text-gray-700 dark:text-zinc-300">
									{content}
								</span>
							</div>
						) : (
							content
						)}
						<TooltipPrimitive.Arrow className="fill-current text-white" />
					</TooltipPrimitive.Content>
				</TooltipPrimitive.Root>
			</TooltipPrimitive.Provider>
		</>
	);
}

export function TooltipContent({
	title,
	cta,
	href,
	onClick,
}: {
	title: string;
	cta?: string;
	href?: string;
	onClick?: () => void;
}) {
	return (
		<div className="flex max-w-xs flex-col items-center space-y-3 p-4 text-center ">
			<p className="text-sm text-gray-700 dark:text-zinc-300">{title}</p>
			{cta &&
				(href ? (
					<Button variant="filled" href={href}>
						{cta}
					</Button>
				) : onClick ? (
					<Button variant="filled" onClick={onClick}>
						{cta}
					</Button>
				) : null)}
		</div>
	);
}

export function OGImageProxy() {
	return (
		<div className="flex max-w-md flex-col items-center space-y-5 p-4 text-center">
			<BlurImage
				alt="Demo GIF for OG Image Proxy"
				src="https://res.cloudinary.com/dubdotsh/image/upload/v1664425639/og-image-proxy-demo.gif"
				width={1200}
				height={1084}
				className="w-full overflow-hidden rounded-md shadow-md"
			/>
			<p className="text-sm text-gray-700">
				Password protection, link expiration, device targeting, custom
				social media cards, etc. Add a custom OG image in front of your
				target URL. Bots like Twitter/Facebook will be served this
				image, while users will be redirected to your target URL.
			</p>
		</div>
	);
}

export function SSOWaitlist() {
	const [opening, setOpening] = useState(false);
	return (
		<>
			<Script
				src="https://tally.so/widgets/embed.js"
				strategy="lazyOnload"
			/>

			<div className="flex max-w-sm flex-col items-center space-y-3 p-4 text-center">
				<h3 className="font-semibold text-gray-800">SAML/SSO</h3>
				<p className="text-sm text-gray-600">
					SAML/SSO is coming soon. Interested in early access? Join
					the waitlist.
				</p>

				<Button
					// loading={opening}
					onClick={() => {
						setOpening(true);
						// @ts-ignore
						// window.Tally?.openPopup("waexqB", {
						// 	width: 540,
						// 	onOpen: () => setOpening(false),
						// });
					}}
				>
					Join waitlist
				</Button>
			</div>
		</>
	);
}
