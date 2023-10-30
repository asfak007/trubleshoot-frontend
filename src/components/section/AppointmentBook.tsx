"use client";
import { cn, nFormatter, price } from "@/lib/utils";
import React, { Fragment, useEffect, useState } from "react";
import BlurImage from "@/components/BlurImage";
import axios from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import Appointment_chat from "@/images/Appointment_chat.png";
import googlePlay from "@/images/google-play1.png";
import apple from "@/images/apple1.png";
import { Button } from "../Button";
import Line2 from "@/images/Line 2.png";

export const Appointment = () => {
  return (
    <div className="w-full bg-slate-100	 shadow-md rounded-lg px-8 py-16 mb-4 ">
      <p className="text-2xl font-semibold	">Book an appointment to get a free consultation</p>
      <form>
        <div className="my-8">
          <label className="block text-gray-700 text-base	 font-bold mb-2" htmlFor="username">
            Your name
          </label>
          <input
            className="shadow appearance-none border-transparent rounded w-full py-4 px-3 text-gray-700 leading-tight focus:border-primary-400"
            id="username"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="my-8">
          <label className="block text-gray-700 text-base	 font-bold mb-2" htmlFor="password">
            Your mobile number
          </label>
          <input
            className="shadow appearance-none border-transparent rounded w-full py-4 px-3 text-gray-700 leading-tight focus:border-primary-400"
            id="username"
            type="text"
            placeholder="Enter your mobile number"
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <Button className="w-full bg-primary-500 text-white text-base rounded-md px-5 py-4">Book Now</Button>
      </form>
    </div>
  );
};

export const AppointmentBook = () => {
  return (
    <div className="relative mx-auto max-w-5xl w-full grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
      <Appointment />
      <BlurImage src={Appointment_chat} alt="" className="h-auto" />
    </div>
  );
};
