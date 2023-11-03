import React from "react";
import { Logo } from "../Logo";
import { Button } from "../Button";

export default function RegisterForm() {
  return (
    <div className="w-full flex-col gap-10 items-center mb-10">
      <div className="flex items-center p-5 ">
        <div className="w-20 h-20 rounded-full bg-gray-400 flex-shrink-0"></div>
        <div className="ml-4">
          <div className="font-semibold text-xl">John Doe</div>
          <div className="text-gray-500">New York, NY</div>
        </div>
      </div>
      <div>
        <div className="w-full grid grid-cols-2 gap-20 mt-7">
          <Button
            variant="filled"
            className="rounded-md bg-primary-700 px-10 py-4"
          >
            General Info
          </Button>
          <Button
            variant="outline"
            className="rounded-md ring-gray-500 ring-2  px-10 py-4"
          >
            Account Info
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-20 mt-10">
        <div className="w-full flex flex-col">
          <p className="text-xl capitalize">Input Field Name</p>
          <input
            type="text"
            className="border-none rounded-md px-5 py-3  bg-primary-100"
            placeholder="Input Field Name"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl capitalize">Input Field Name</p>
          <input
            type="text"
            className="border-none rounded-md px-5 py-3  bg-primary-100"
            placeholder="Input Field Name"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl capitalize">Input Field Name</p>
          <input
            type="text"
            className="border-none rounded-md px-5 py-3  bg-primary-100"
            placeholder="Input Field Name"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl capitalize">Input Field Name</p>
          <input
            type="text"
            className="border-none rounded-md px-5 py-3  bg-primary-100"
            placeholder="Input Field Name"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl capitalize">Input Field Name</p>
          <input
            type="text"
            className="border-none rounded-md px-5 py-3  bg-primary-100"
            placeholder="Input Field Name"
          />
        </div>
        <div className="w-full flex flex-col">
          <p className="text-xl capitalize">Input Field Name</p>
          <input
            type="text"
            className="border-none rounded-md px-5 py-3  bg-primary-100"
            placeholder="Input Field Name"
          />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col w-full">
          <h3 className="text-xl">Company Information</h3>
          <div className=" bg-gray-300 w-36 h-36 rounded-3xl justify-center  self-center ">
            <svg
              className="h-10 w-10 text-gray-500  translate-x-1/2 translate-y-1/2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="13" r="3" />
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h2m9 7v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <line x1="15" y1="6" x2="21" y2="6" />
              <line x1="18" y1="3" x2="18" y2="9" />
            </svg>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-x-20 mt-10">
            <div className="w-full flex flex-col">
              <p className="text-xl capitalize">Input Field Name</p>
              <input
                type="text"
                className="border-none rounded-md px-5 py-3  bg-primary-100"
                placeholder="Input Field Name"
              />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl capitalize">Input Field Name</p>
              <input
                type="text"
                className="border-none rounded-md px-5 py-3  bg-primary-100"
                placeholder="Input Field Name"
              />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl capitalize">Input Field Name</p>
              <input
                type="text"
                className="border-none rounded-md px-5 py-3  bg-primary-100"
                placeholder="Input Field Name"
              />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl capitalize">Input Field Name</p>
              <input
                type="text"
                className="border-none rounded-md px-5 py-3  bg-primary-100"
                placeholder="Input Field Name"
              />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl capitalize">Input Field Name</p>
              <input
                type="text"
                className="border-none rounded-md px-5 py-3  bg-primary-100"
                placeholder="Input Field Name"
              />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-xl capitalize">Input Field Name</p>
              <input
                type="text"
                className="border-none rounded-md px-5 py-3  bg-primary-100"
                placeholder="Input Field Name"
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
