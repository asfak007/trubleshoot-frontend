"use client";
import ContactUs from "@/components/Contact";
import Contents from "@/components/Contents";
import {Heading} from "@/components/Heading";

export default function CookiePolicy() {
    return (
        <Contents className="max-w-6xl mx-auto ">
            <Heading level={1}>Contact</Heading>
            <div className="relative w-full py-10 xl:pt-10">
                <ContactUs />
            </div>
        </Contents>
    );
}
