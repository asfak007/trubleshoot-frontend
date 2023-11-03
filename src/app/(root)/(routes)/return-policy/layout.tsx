import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";
export const metadata: Metadata = constructMetadata({
	title: "Return Policy",
	description: "One-stop Solution for your Services.",
});

export default function ReturnPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
