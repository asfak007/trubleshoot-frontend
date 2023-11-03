"use client";
import React, { Fragment } from "react";
import { Prose } from "@/components/Prose";
import Contents from "@/components/Contents";
import { ArrowRightIcon } from "@/components/Icons";
import { cn, truncate } from "@/lib/utils";
import { skillsContainer } from "@/utils/motion";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import menIcon from "@/images/icons/man1.png";
import addressIcon from "@/images/icons/placeholder1.png";
import notificationIcon from "@/images/icons/notification1.png";
import userDemoProfile from "@/images/Ellipse298.png";
import logoutIcon from "@/images/icons/enter1.png";
import BlurImage from "../BlurImage";
import { Button } from "../Button";
import { Heading } from "../Heading";
import DemoBooking from "@/images/Rectangle 2201.png";
import { Settings, MapPin, ArrowRight, MoreVertical } from "lucide-react";

export const ProviderServiceTracker = () => {
  return (
    <div className="grid grid-cols-6 grid-flow-col gap-20 relative w-full py-10 xl:pt-10">
      <ServiceSummary />
      <div className="col-span-5">
        <ServicesTab />
        <AllServices />
      </div>
    </div>
  );
};
export const ServiceSummary = () => {
  return (
    <div className="-mb-px text-gray-500 dark:text-gray-400">
      <div className="mr-2 shadow p-3 rounded-lg">
        <h4 className="text-xl font-semibold	 text-center text-primary-500">
          21,00৳
        </h4>
        <h4 className="text-center text-lg	">
          Total <br /> Earnings
        </h4>
      </div>
      <div className="mr-2 shadow p-3 rounded-lg mt-4">
        <h4 className="text-xl font-semibold	 text-center text-primary-500">
          20
        </h4>
        <h4 className="text-center text-lg	">
          Total <br /> Bookings
        </h4>
      </div>
      <div className="mr-2 shadow p-3 rounded-lg mt-4">
        <h4 className="text-xl font-semibold	 text-center text-primary-500">
          12
        </h4>
        <h4 className="text-center text-lg	">
          Providers <br /> Teams
        </h4>
      </div>
    </div>
  );
};

export const ServicesTab = () => {
  return (
    <div className="flex flex-wrap  mb-6 gap-5 flex">
      <Button
        className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded px-10 py-2"
        variant="filled"
      >
        Requested
      </Button>
      <Button
        className="font-semibold bg-slate-100 hover:bg-primary-500 text-white rounded px-10 py-2 text-black"
        variant="filled"
      >
        Accepted
      </Button>
      <Button
        className="font-semibold bg-slate-100 hover:bg-primary-500 text-white rounded px-10 py-2 text-black"
        variant="filled"
      >
        Completed
      </Button>
    </div>
  );
};
export const AllServices = () => {
  return (
    <Fragment>
      <Heading level={1}>All Receives Services</Heading>
      <div className="grid flex-col w-full bg-primary-50  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <div className="flex py-3 sm:py-4 px-4  space-x-4">
          <h1 className="text-2xl text-black font-medium">01</h1>
          <div>
            <Image
              height={100}
              width={100}
              className="m-0"
              src={DemoBooking}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h6 className="text-lg color-black font-medium mr-10 leading-6">
              IT Troubleshooting and Repair (Troubleshooting){" "}
            </h6>
            <h6 className="text-sm flex items-center gap-2 text[#868686]">
              <Settings color="#868686" size={15} /> IT Troubleshooting and
              Repair
            </h6>
            <h6 className="text-sm flex items-center  gap-2 text[#868686]">
              {" "}
              <MapPin color="#868686" size={15} />
              Dhanmondi 32 road Bridge
            </h6>
          </div>
          <div className="flex flex-col items-end dark:text-white h-full">
            <MoreVertical />
            <h6 className="text-2xl text-primary-500 font-medium mt-5">
              ৳3,500
            </h6>
            <Button
              className="font-semibold bg-slate-100 hover:bg-primary-500 text-white rounded px-6 py-1 text-black mt-2"
              variant="filled"
            >
              Details
              <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
