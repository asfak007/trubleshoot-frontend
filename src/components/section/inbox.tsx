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
import { Home, ChevronDown, LogOut } from "lucide-react";
import { Heading } from "../Heading";
export const Inbox = () => {
  return (
    <div className="grid grid-cols-2 grid-flow-col gap-20 relative w-full py-10 xl:pt-10">
      <Messages />
      <ChatBox/>
    </div>
  );
};
export const Messages = () => {
  return (
    <div className="w-full text-sm font-medium text-gray-500 dark:text-gray-400">
      <TabButton />
      <InboxItem />
      <InboxItem />
      <InboxItem />
    </div>
  );
};

export const InboxItem = () => {
  return (
    <div className="flex space-x-4 shadow border my-4 rounded">
      <label htmlFor="fileInput" className="cursor-pointer">
        <Image
          src={userDemoProfile}
          alt="Image"
          className="w-20 h-20 m-0 rounded-ful"
        />
      </label>
      {/* accept={allowedTypes.join(",")} */}
      <input type="file" id="fileInput" className="hidden" />
      <div className=" dark:text-white">
        <h4 className="text-xl font-medium">Arshan Sayed</h4>
        <h6 className="">Dhaka, Bangladesh</h6>
      </div>
    </div>
  );
};

export const ChatBox = () => {
  return (
    <div className="flex space-x-4 shadow border my-4 rounded">
      <label htmlFor="fileInput" className="cursor-pointer">
        <Image
          src={userDemoProfile}
          alt="Image"
          className="w-20 h-20 m-0 rounded-ful"
        />
      </label>
      {/* accept={allowedTypes.join(",")} */}
      <input type="file" id="fileInput" className="hidden" />
      <div className=" dark:text-white">
        <h4 className="text-xl font-medium">Arshan Sayed</h4>
        <h6 className="">Dhaka, Bangladesh</h6>
      </div>
    </div>
  );
};



export const TabButton = () => {
  return (
    <div className="flex space-between mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button
          className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2 mx-0"
          variant="filled"
        >
          Customer
        </Button>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button
          className="font-semibold bg-slate-100	 hover:bg-primary-500 text-black rounded px-16 py-2 border mx-0"
          variant="filled"
        >
          Service men
        </Button>
      </div>
    </div>
  );
};
