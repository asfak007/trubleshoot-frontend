import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
	title: "Terms and Conditions",
	description: "One-stop Solution for your Services.",
});

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
