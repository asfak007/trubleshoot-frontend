"use client";

import React, { Fragment, ReactNode } from "react";
import Contents from "@/components/Contents";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { ServiceCreate } from "@/components/section/ServiceCreate";

export default function ServiceCreatePage() {
  return (
    <Contents className="max-w-6xl mx-auto">
      <Heading className="text-center" level={1}>Service’s</Heading>
      <ServiceCreate />
    </Contents>
  );
}
