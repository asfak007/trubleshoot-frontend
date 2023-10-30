"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import { cn, constructMetadata } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Prose } from "@/components/Prose";
import { Footer } from "@/components/Footer";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		// console.log(error);
	}, [error]);
	const router = useRouter();
	return (
		<Fragment>
			<header className={cn("relative z-40 contents px-6 pt-4 pb-8 ")}>
				<Header />
			</header>
			<Prose
				as="main"
				className={cn(
					"relative min-h-[calc(100vh-75px)] pt-24 lg:px-8 sm:px-7 xs:px-5 px-4 xl:overflow-visible overflow-hidden flex items-center"
				)}
			>
				<div className="relative h-full py-10">
					<div className="feedback-gradient -z-10"></div>
					<div className="mx-auto text-start">
						<h1 className="mb-4 text-6xl tracking-tight font-extrabold lg:text-9xl">
							Error :(
						</h1>
						<p className="mb-4 pt-4 capitalize text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
							Something went wrong.
						</p>
						<p className="mb-4 lead">
							We are already working to solve the problem.
						</p>
						<Button onClick={() => router.back()} arrow="left">
							Go Back
						</Button>
					</div>
				</div>
			</Prose>
			<Footer/>
		</Fragment>
	);
}
