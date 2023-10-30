"use client";

import React, { Fragment, ReactNode } from "react";
import Contents from "@/components/Contents";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { AddService } from "@/components/section/AddService";

export default function AddServicePage() {
  return (
    <Contents className="max-w-6xl mx-auto">
     <AddService/>
    </Contents>
  );
}