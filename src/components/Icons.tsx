"use client";

import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

import {
	TwitterIcon,
	InstagramIcon,
	GitHubIcon,
	LinkedInIcon,
} from "@/components/SocialIcons";

import BlurImage from "./BlurImage";

export function ArrowDownIcon({ ...props }) {
	return (
		<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
			<path
				d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function SocialLink({
	icon: Icon,
	href = "/about",
	...props
}: {
	icon?: any;
	href?: string;
}) {
	return (
		<Link href={`${href}`} className="group -m-1 p-1" {...props}>
			<Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
		</Link>
	);
}

export function ArrowRightIcon({
	className,
	...props
}: {
	className?: string;
}) {
	return (
		<svg
			viewBox="0 0 3 6"
			className={cn(
				"", //default
				className
			)}
			{...props}
		>
			<path
				d="M0 0L3 3L0 6"
				fill="none"
				strokeWidth="2"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	);
}

export function ArrowIcon({ className, ...props }: { className?: string }) {
	return (
		<svg
			className={cn(
				"transition duration-200 rotate-180", //default
				className
			)}
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<polyline points="6 9 12 15 18 9"></polyline>
		</svg>
	);
}

export function CheckIcon({ className, ...props }: { className?: string }) {
	return (
		<svg
			version="1.1"
			className={cn(
				"w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0", //default
				className
			)}
			{...props}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
		</svg>
	);
}

export function PencilRuler({ className, ...props }: { className?: string }) {
	return (
		<svg
			version="1.1"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			// fill="currentColor"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			className={cn(
				"h-6 w-6 lucide lucide-pencil-ruler", //default
				className
			)}
			{...props}
		>
			<path d="m15 5 4 4" />
			<path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
			<path d="m8 6 2-2" />
			<path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
			<path d="m18 16 2-2" />
			<path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
		</svg>
	);
}

export function FacebookIcon({ className, ...props }: { className?: string }) {
	return (
		<svg
			version="1.1"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			className={cn(
				"h-6 w-6", //default
				className
			)}
			{...props}
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					fill="#1877F2"
					d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
				></path>
				<path
					fill="#ffffff"
					d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
				></path>
			</g>
		</svg>
	);
}

export function GoogleIcon({ className, ...props }: { className?: string }) {
	return (
		<svg
			viewBox="-0.5 0 48 48"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
			className={cn(
				"h-6 w-6 lucide lucide-pencil-ruler", //default
				className
			)}
			{...props}
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<title>Google-color</title> <desc>Created with Sketch.</desc>
				<defs> </defs>
				<g
					id="Icons"
					stroke="none"
					stroke-width="1"
					fill="none"
					fill-rule="evenodd"
				>
					<g
						id="Color-"
						transform="translate(-401.000000, -860.000000)"
					>
						<g
							id="Google"
							transform="translate(401.000000, 860.000000)"
						>
							<path
								d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
								id="Fill-1"
								fill="#FBBC05"
							></path>
							<path
								d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
								id="Fill-2"
								fill="#EB4335"
							></path>
							<path
								d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
								id="Fill-3"
								fill="#34A853"
							></path>
							<path
								d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
								id="Fill-4"
								fill="#4285F4"
							></path>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}
