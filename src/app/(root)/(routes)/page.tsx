"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAlertModal } from "@/hooks/use-alert-modal";
import { Prose } from "@/components/Prose";
import Contents from "@/components/Contents";
import { cn, truncate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import { Categories, Hero, Services } from "@/components/section";
import { RecommendedServices } from "@/components/section/Services";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { TrendingServices } from "@/components/section/TrendingServices";
import { SeriviceSteps } from "@/components/section/ServiceSteps";
import BlurImage from "@/components/BlurImage";
import { WhyUs } from "@/components/section/WhyUs";
import Line1 from "@/images/Line1.png";

import { CompletionSummary } from "@/components/section/CompletionSummary";
import { Reviews } from "@/components/section/Reviews";
import { AppDownload } from "@/components/section/AppDownload";
import { AppointmentBook } from "@/components/section/AppointmentBook";
import "react-alice-carousel/lib/alice-carousel.css";
import useProtectedPage from "@/hooks/useProtectPage";

export default function Home() {
  const { onOpen } = useAlertModal();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement | null>(null);

  // const getServices = async () => {
  // 	// const csrf = await axios.post("/refresh-csrf");
  // 	// console.log("csrf", csrf);
  // 	try {
  // 		const response = await axios.get("/auth/customer");
  // 		const data = await response.data;
  // 		console.log("data", data);
  // 	} catch (error) {
  // 		console.log("error", error);
  // 	}
  // };
  // useEffect(() => {
  // 	getServices();
  // 	// @ts-ignore
  // 	console.log("customer", customer);
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Contents className="min-w-full mx-auto ">
      {/* hero section */}
      <Prose
        enable={false}
        className="relative w-full flex justify-center items-center"
      >
        <Hero />
      </Prose>
      {/* Categories section */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8 py-8">
        <Button
          className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4 py-2"
          variant="filled"
        >
          All Services
        </Button>

        <Prose enable={false} className="relative w-full">
          <Categories />
        </Prose>
      </div>
      {/* Services section */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8 ">
        <Button
          className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4 py-2"
          variant="filled"
        >
          Recommended Services
        </Button>

        <Prose enable={false} className="relative w-full ">
          <RecommendedServices />
        </Prose>
      </div>
      {/*Trending Services section */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8  py-16">
        <Button
          className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4 py-2"
          variant="filled"
        >
          Trending
        </Button>

        <Prose enable={false} className="relative w-full ">
          <TrendingServices />
        </Prose>
      </div>

      {/* Service workflow */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8  py-16">
        <Button
          className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4"
          variant="filled"
        >
          How IT Works
        </Button>
        <p className="text-2xl">Easiest way to get a service</p>
        <Prose enable={false} className="relative w-full ">
          <SeriviceSteps />
        </Prose>
      </div>

      {/* Why us */}
      <div className="relative mx-auto w-full space-y-8 py-16 bg-primary-100">
        <Prose enable={false} className="relative max-w-5xl mx-auto">
          <div className="flex items-center font-semibold">
            <Image src={Line1} alt="Description" width={60} height={8} />
            <p className="text-lg ml-5"> Why choose us ?</p>
          </div>
          <p className="text-4xl">
            We are at your side whenever you
            <br /> need...
          </p>
          <WhyUs />
        </Prose>
      </div>

      {/* CompletionSummary counting */}
      <div className="relative mx-auto w-full space-y-8  py-16 bg-primary-500">
        <Prose enable={false} className="relative w-full ">
          <CompletionSummary />
        </Prose>
      </div>

      <div className="relative mx-auto w-full space-y-8 py-16 ">
        <Prose enable={false} className="relative max-w-5xl mx-auto">
          <p className="text-4xl  text-gray-900 text-center mb-4 font-normal">
            {" "}
            What our fantastic clinets say
          </p>
          <p className="text-xl text-gray-900 text-center font-normal mb-6">
            Some information or comments taken from those who have asked about
            our
            <br />
            services. People who are happy to work with us
          </p>
          <Reviews />
        </Prose>
      </div>

      <div className="relative mx-auto w-full space-y-8 py-5 ">
        <Prose enable={false} className="relative max-w-5xl mx-auto">
          <AppDownload />
        </Prose>
      </div>

      <div className="relative mx-auto w-full space-y-8  py-16 bg-primary-500">
        <Prose enable={false} className="relative w-full ">
          <AppointmentBook />
        </Prose>
      </div>
    </Contents>
  );
}
