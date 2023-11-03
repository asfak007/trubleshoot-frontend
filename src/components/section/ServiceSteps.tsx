"use client";
import { cn, nFormatter, price } from "@/lib/utils";
import React, { Fragment, useEffect, useState } from "react";
import BlurImage from "@/components/BlurImage";
import { Heading } from "@/components/Heading";
import axios from "@/lib/axios";
import Image from "next/image";
import { LocateIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import heroImage from "@/images/hero.png";
import { Skeleton } from "@/components/ui/skeleton";
import { Rating } from "@/components/Ratings";

export const Steps = () => {
  return (
    <Fragment>
      <ol className="relative text-gray-500 left-8 border-l border-primary-500/90 dark:border-gray-700 dark:text-gray-400">
        <li className="mb-10 ml-16">
          <span className="absolute font-semibold	text-3xl flex items-center justify-center w-14 h-14 bg-primary-500/90 text-white rounded-full -left-7 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            1
          </span>
          <h3 className="leading-loose	text-black font-medium text-2xl">Select the Service</h3>
          <p className="text-xl	">Pick the service you are looking for- from the website or the app.</p>
        </li>

        <li className="mb-10 ml-16">
          <span className="absolute font-semibold	text-3xl flex items-center justify-center w-14 h-14 bg-primary-500/90 text-white rounded-full -left-7 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            2
          </span>
          <h3 className="leading-loose text-black font-medium text-2xl">Pick your schedule</h3>
          <p className="text-xl	">
            Pick your convenient date and time to avail the service. Pick the service provider based on their rating.
          </p>
        </li>

        <li className="ml-16">
          <span className="absolute font-semibold	text-3xl flex items-center justify-center w-14 h-14 bg-primary-500/90 text-white rounded-full -left-7 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            3
          </span>
          <h3 className="leading-loose text-black font-medium text-2xl">Place Your Order & Relax</h3>
          <p className="text-xl	">
            Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.
          </p>
        </li>
      </ol>
    </Fragment>
  );
};

export const ServiceVideo = () => {
  return (
    <div className="relative overflow-hidden  flex items-center justify-center">
      <BlurImage
        src="https://res.cloudinary.com/dub6q8hhb/image/upload/v1696271037/qejisrcsq1urgzp3b2ms.png"
        alt=""
        width={600}
        height={300}
        className="relative object-cover"
      />
    </div>
  );
};

export const SeriviceSteps = () => {
  return (
    <Fragment>
      <div className="relative w-full grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <Steps />
        <ServiceVideo />
      </div>
    </Fragment>
  );
};
