"use client";

import React, { Fragment, ReactNode } from "react";
import Contents from "@/components/Contents";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { Inbox } from "@/components/section/inbox";

export default function InboxPage() {
  return (
    <Contents className="max-w-6xl mx-auto">
      <Heading level={1}>Inbox</Heading>
      <Inbox />
    </Contents>
  );
}
