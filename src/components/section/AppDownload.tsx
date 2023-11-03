"use client";
import { cn, nFormatter, price } from "@/lib/utils";
import React, { Fragment, useEffect, useState } from "react";
import BlurImage from "@/components/BlurImage";
import axios from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import AppBanner_img from "@/images/Group18671.png";
import googlePlay from "@/images/google-play1.png";
import apple from "@/images/apple1.png";
import { Button } from "../Button";
import Line2 from "@/images/Line 2.png";

export const Download = () => {
  return (
    <div className="flow-root mt-20">
      <Button className="flex items-center  bg-primary-500/90 hover:bg-primary-500 text-white rounded-md px-6">
        <Image src={Line2} alt="Description" width={50} height={6} />
        <p className="text-lg ml-4 "> Downloda our App</p>
      </Button>
      <p className="text-4xl text-black	my-10 font-normal">
        We are always working for you. Take <br />
        any of our services anytime.
      </p>
      <p className="text-xl text-black my-10 font-normal mb-6">
        Give us your mobile number. You’ll get on SMS with the <br /> app download link.
      </p>

      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-4 w-full z-20 text-sm rounded-s-lg  text-gray-900 bg-gray-50 rounded-r-lg border-primary-400  borde focus:border-primary-400  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Type your mobile number"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-4 h-full text-sm font-medium text-white bg-primary-500 rounded-r-lg border border-primary-500 hover:primary-400 focus:ring-4 focus:outline-none focus:primary-500"
          >
            Get the app
          </button>
        </div>
      </div>

      <div className="my-14 flex space-x-4 my-">
        <Button className="flex items-center  bg-black  text-white rounded-md px-5 py-2">
          <Image src={googlePlay} alt="Description" width={32} height={32} />
          <p className="text-lg "> Google play</p>
        </Button>
        <Button className="flex items-center  bg-black  text-white rounded-md px-5 py-2">
          <Image src={apple} alt="Description" width={32} height={32} />
          <p className="text-lg"> App Store</p>
        </Button>
      </div>
    </div>
  );
};

export const AppDownload = () => {
  return (
    <div className="relative w-full grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
      <div className="col-span-3">
        <Download />
      </div>
      <div className="col-span-2">
        <BlurImage src={AppBanner_img} alt="" className="h-auto" />
      </div>
    </div>
  );
};
