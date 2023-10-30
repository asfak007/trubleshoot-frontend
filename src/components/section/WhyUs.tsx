"use client";
import { cn, nFormatter, price } from "@/lib/utils";
import React, { Fragment, useEffect, useState } from "react";
import BlurImage from "@/components/BlurImage";
import { Heading } from "@/components/Heading";
import axios from "@/lib/axios";
import Image from "next/image";
import { LocateIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import support_icon from "@/images/support_icon.png";
import service_chooseUsIcon from "@/images/service_chooseUs.png";
import WhyChooseUsImg from "@/images/WhyChooseUsImg.png";
import { Skeleton } from "@/components/ui/skeleton";
import { Rating } from "@/components/Ratings";

export const WhyChooseUs = () => {
  return (
    <div className="flow-root">
      <ul role="list">
        <li className="py-3  px-6 sm:py-4 mt-4 bg-primary-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <BlurImage src={support_icon} alt="" className="w-12 h-12 " />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xl font-medium text-gray-900 truncate dark:text-white">24/7 Support</p>
            </div>
          </div>
          <p className="text-lg  dark:text-gray-400">our support team i ready for you 24 hour a day and night</p>
        </li>

        <li className="py-3 px-6 sm:py-4 mt-4 bg-primary-50 rounded-lg ">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <BlurImage src={service_chooseUsIcon} alt="" className="w-12 h-12 " />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xl font-medium text-gray-900 truncate dark:text-white">Dedicated Support</p>
            </div>
          </div>
          <p className="text-lg dark:text-gray-400">From data backup to IT problem, you will find solutions to all problems with us.</p>
        </li>
      </ul>
    </div>
  );
};

export const WhyChooseUsBanner = () => {
  return (
    <div>
      <BlurImage src={WhyChooseUsImg} alt="" className="w-full xl:h-80 lg:h-80 md:h-80 xl:max-w-3xl lg:max-w-xl md:max-w-md max-w-xs " />
    </div>
  );
};

export const WhyUs = () => {
  return (
    <div className="relative w-full grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
      <WhyChooseUs />
      <WhyChooseUsBanner />
    </div>
  );
};
