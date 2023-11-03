"use client";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import { ThemeProvider } from "@/providers/theme-provider";
import { cn, constructMetadata } from "@/lib/utils";

import "./globals.css";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Prose } from "@/components/Prose";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
	return (
		<html lang="en">
			<head>
				<title>Not Found | This page could not be found.</title>
			</head>
			<body
				className={cn(
					"min-h-screen font-sans antialiased",
					inter.className
				)}
			>
				<header
					className={cn("relative z-40 contents px-6 pt-4 pb-8 ")}
				>
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
								404 :(
							</h1>
							<p className="mb-4 pt-4 capitalize text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
								Something went wrong.
							</p>
							<p className="mb-4 lead">
								This page could not be found.
							</p>
							<Button href="/">Go Back</Button>
						</div>
					</div>
				</Prose>
				<Footer />
			</body>
		</html>
	);
}
