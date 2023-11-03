"use client";
import { cn } from "@/lib/utils";
import React, { Fragment, useState } from "react";
import BlurImage from "@/components/BlurImage";
import heroImage from "@/images/hero.png";
import { Heading } from "@/components/Heading";
import axios from "@/lib/axios";
import Link from "next/link";

export const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [IsDropDownShow, setIsDropdownShow] = useState<boolean>(false);
  const handleSearch = async () => {
    try {
      const request = await axios.get(
        `service/search?query=${searchTerm}&zone_id=1`
      );
      const response: AxiosResponse = await request.data;
      if (response.status === 200) {
        setIsDropdownShow(true);
        const categories = response.data.services.data;
        setCategories(categories);
      }
    } catch (error) {
      setCategories([]);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <div className="relative w-full py-14 flex flex-col items-center">
        <Heading level="1" className="text-5xl text-center">
          One-stop Solution for your{" "}
          <span className="text-primary-400">Services.</span>
        </Heading>
        <p className="text-center  text-lg my-5">
          We are always working for you. Take any of our services anytime.
        </p>

        <div className="relative">
          <div className="relative mt-10 py-1 px-1 lg:w-screen w-[90vw] max-w-lg rounded-md bg-white shadow-sm flex justify-between items-center overflow-hidden">
            <input
              type="text"
              className="bg-transparent w-full border-none text-sm outline-none hover:outline-none pr-24"
              placeholder="What are you locking for?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-0 primary-500 h-full bg-primary-500 text-white px-4 font-semibold"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {IsDropDownShow && (
            <div
              style={{ top: "5.5rem", height:"10rem" }}
              className="absolute overflow-y-scroll mt-1 scroll-smooth bg-gray-200 p-4  mb-10 mt-1 py-1 px-1 lg:w-screen w-[90vw] max-w-lg rounded-md bg-white shadow-sm z-10 top-0"
            >				
              {categories.length?categories.map((item, index) => (
                <Link
                  href={`/services/${item.id}`}
									onClick={()=>setIsDropdownShow(false)}
                  className="block w-full py-1 my-1 text-lg bg-primary-500 px-3"
                >
                  {item.name}
                </Link>
              )):<h2 className="text-center	text-2xl text-red-600	">Not Found</h2>}
            </div>
          )}
        </div>

        <BlurImage
          src={heroImage}
          alt=""
          className="w-full xl:max-w-3xl lg:max-w-xl md:max-w-md max-w-xs py-10"
        />
      </div>
    </Fragment>
  );
};
