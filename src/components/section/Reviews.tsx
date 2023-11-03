"use client";
import React, { Fragment, useEffect, useState } from "react";
import BlurImage from "@/components/BlurImage";
import { Heading } from "@/components/Heading";
import axios from "@/lib/axios";
import Image from "next/image";
import { LocateIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import heroImage from "@/images/hero.png";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, truncate } from "@/lib/utils";

import AliceCarousel from "react-alice-carousel";

interface ReviewProps {
  review: {
    customer_name: string;
    review_comment: string;
    customers: {
      image: string;
    };
  }; 
  className?: string;
}
export const Review: React.FC<ReviewProps> = ({ review, className }) => {
  return (
    <div className="mx-3">
      <div className="dark:bg-neutral-700 border px-6 bg-background rounded-2xl py-7 shadow-md">
        <div className="flex items-center justify-center mb-4">
          <Image src={review?.customers?.image} height={150} width={150} alt="" />
        </div>
        <div>
          <p className="text-2xl text-center font-semibold my-4 text-gray-900 ">{review?.customer_name}</p>
          <p className="text-lg text-gray-900 font-normal">{review?.review_comment}</p>
        </div>
      </div>
    </div>
  );
};

export const Reviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const request = await axios.get(`/review`);
        const response: AxiosResponse = await request.data;
        if (response.status) {
          setReviews(response.data.reviews?.map((review: any) => <Review review={review} />));      
        }
      } catch (error) {
        setReviews([]);
      }
      setLoading(false);
    };
    getServices();
  }, []);

  const Skeltor = [<ReviewSkeleton />, <ReviewSkeleton />, <ReviewSkeleton />];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className="py-5">
      <AliceCarousel
        disableDotsControls
        mouseTracking
        responsive={responsive}
        items={loading ? Skeltor : reviews}
        renderNextButton={() => {
          return (
            <div className="flex justify-start mt-10">
              <div className="w-9 h-2.5 bg-gray-400 rounded-lg" />
            </div>
          );
        }}
        renderPrevButton={() => {
          return (
            <div className="flex justify-end  mt-10">
              <div className="w-16 h-2.5 bg-primary-500 rounded-lg" />
            </div>
          );
        }}
      />
    </div>
  );
};

const ReviewSkeleton = ({ ...props }) => {
  return (
    <div className={cn("relative bg-white shadow-md h-72 rounded-lg overflow-hidden mx-4", props?.className)}>
      <Skeleton className="h-44 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={cn("h-12 w-12 text-slate-300")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </Skeleton>
      <div className="relative p-3 space-y-4">
        <div className="flex space-x-2 overflow-hidden">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div className="flex space-x-2 overflow-hidden">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-8" />
        </div>
        <h4 className="flex items-center font-semibold text-xs text-slate-500">
          <MapPinIcon className="h-3.5 w-3.5 mr-1 animate-pulse" /> <Skeleton className="h-3 w-12" />
        </h4>
        <div className="flex space-x-2 overflow-hidden">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
};
