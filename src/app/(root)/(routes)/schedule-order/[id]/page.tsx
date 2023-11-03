"use client"
import { ScheduleOrder } from "@/components/section/ScheduleOrder";
import useProtectedPage from "@/hooks/useProtectPage";
import React, { Fragment } from "react";

const page = () => {
  useProtectedPage();
  return (
    <Fragment>
      <ScheduleOrder/>
    </Fragment>
  );
};

export default page;
