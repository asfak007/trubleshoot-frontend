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
import inputImage from "@/images/Rectangle 2142.png";
import addressIcon from "@/images/icons/placeholder1.png";
import notificationIcon from "@/images/icons/notification1.png";
import userDemoProfile from "@/images/Ellipse298.png";
import logoutIcon from "@/images/icons/enter1.png";
import BlurImage from "../BlurImage";
import { Button } from "../Button";
import { Home, ChevronDown, LogOut } from "lucide-react";
import { Heading } from "../Heading";
export const ServiceCreate = () => {
  return (
    <div className="relative  py-10 xl:pt-10">
      {/* <FirstStep /> */}
      <SecondStep />
    </div>
  );
};

export const UserProfileImage = () => {
  return (
    <div className="flex items-center space-x-4 ">
      <label htmlFor="fileInput" className="cursor-pointer">
        <Image
          src={userDemoProfile}
          alt="Image"
          className="w-24 h-24 m-0 rounded-ful"
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

export const FirstStep = () => {
  return (
    <form className="w-2/3 mx-auto">
      <BlurImage className="mx-auto" width={80} src={inputImage} alt="image" />
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Select Zone
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Select Category
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Sub Category
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"></div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Price Type
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Price
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="w-full text-center">
        <Button
          className="font-semibold mx-auto bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2"
          variant="filled"
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export const SecondStep = () => {
  return (
    <form className="w-2/3 mx-auto">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Discount %
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Duration ( Hours- Minutes)
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>

        <div className="w-full  px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Text
          </label>
          <textarea
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            placeholder="Jane"
          />
        </div>

        <div className="w-full  px-3 mb-6 md:mb-0">
          <label
            className="block  tracking-wide text-gray-700 text-xs font-bold mb-3"
            htmlFor="grid-first-name"
          >
            Short description
          </label>
          <textarea
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            placeholder="Jane"
          />
        </div>
        
      </div>
      <div className="w-full text-center">
        <Button
          className="font-semibold mx-auto bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2"
          variant="filled"
        >
          Next
        </Button>
      </div>
    </form>
  );
};
