import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";
export const metadata: Metadata = constructMetadata({
	title: "Cookie Policy",
	description: "One-stop Solution for your Services.",
});

export default function CookiePolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
