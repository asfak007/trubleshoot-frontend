import {Metadata} from "next";
import {constructMetadata} from "@/lib/utils";
export const metadata: Metadata = constructMetadata({
    title: "Booking",
    description: "One-stop Solution for your Services.",
});

export default function BookingLayout({children}: {children: React.ReactNode}) {
    return children;
}
