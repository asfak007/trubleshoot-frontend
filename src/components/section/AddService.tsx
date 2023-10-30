"use client";
import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import BlurImage from "@/components/BlurImage";
import heroImage from "@/images/customer-service 1.png";
import { Heading } from "@/components/Heading";
import { Button } from "../Button";

export const AddService = () => {
  return (
    <Fragment>
      <div className="relative w-full py-14 flex flex-col items-center">
        <Heading level="1" className=" text-center">
          Service’s
        </Heading>
        <BlurImage src={heroImage} alt="" className=" py-10 mt-5" />
        <Button
          className="font-semibold mx-auto bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-3"
          variant="filled"
        >
          Add Service’s
        </Button>
      </div>
    </Fragment>
  );
};
