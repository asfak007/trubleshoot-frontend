import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn, constructMetadata } from "@/lib/utils";

import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	style: ["italic", "normal"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = constructMetadata({
	title: "One-stop Solution for your Services.",
	description: "One-stop Solution for your Services.",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					// "text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900",
					poppins.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
