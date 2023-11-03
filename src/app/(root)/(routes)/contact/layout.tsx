import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";
export const metadata: Metadata = constructMetadata({
	title: "Contact",
	description: "One-stop Solution for your Services.",
});

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
