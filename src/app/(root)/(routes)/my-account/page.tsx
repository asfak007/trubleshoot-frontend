"use client";

import Contents from "@/components/Contents";
import {Heading} from "@/components/Heading";
import {MyAccount} from "@/components/section/MyAccount";
import useProtectedPage from "@/hooks/useProtectPage";

export default function MyAccountPage() {
    useProtectedPage();
    return (
        <Contents className="max-w-6xl mx-auto">
            <Heading level={1}>My account</Heading>
            <MyAccount />
        </Contents>
    );
}
