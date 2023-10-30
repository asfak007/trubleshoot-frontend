"use client";
import React from "react";
export const CompletionItem = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col items-center">
        <h5 className="mb-1 text-3xl	font-semibold	 text-white dark:text-white">10,121</h5>
        <span className="text-xl	text-white  dark:text-white">Order Served</span>
      </div>
    </div>
  );
};

export const CompletionSummary = () => {
  return (
    <div className="relative mx-auto max-w-5xl grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-16">
      <CompletionItem />
      <CompletionItem />
      <CompletionItem />
    </div>
  );
};
