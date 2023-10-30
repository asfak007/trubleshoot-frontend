"use client";
import DemoBooking from "@/images/Rectangle 2201.png";
import cancelIcon from "@/images/icons/cancel.png";
import completedIcon from "@/images/icons/completed-task1.png";
import PendingIcon from "@/images/icons/expired1.png";
import progressIcon from "@/images/icons/progress1.png";
import selectIcon from "@/images/icons/select-all.png";
import Image from "next/image";

import {MapPin, Settings} from "lucide-react";
import {useEffect, useState} from "react";
import axios from "@/lib/axios";
import convertTimestampToDesiredFormat from "@/lib/convertTimestampFormat";
import Link from "next/link";
export const Booking = () => {
    const [tab, setTab] = useState<string>("all-services");
    const [loading, setLoading] = useState<boolean>(true);
    const [booking, setBooking] = useState<any[]>([]);
    const [pendingServices, setPendingServices] = useState<Service[]>([]);
    const [acceptedServices, setAcceptedServices] = useState<Service[]>([]);
    const [completedServices, setCompletedServices] = useState<Service[]>([]);
    const [CanceledServices, setCanceledServices] = useState<Service[]>([]);

    useEffect(() => {
        const pendingServicesData = booking.filter(
            (each) => each.status === "pending"
        );

        const acceptedServicesData = booking.filter(
            (each) => each.status === "accepted"
        );

        const completedServicesData = booking.filter(
            (each) => each.status === "completed"
        );
        const canceledServicesData = booking.filter(
            (each) => each.status === "canceled"
        );

        setPendingServices(pendingServicesData);
        setAcceptedServices(acceptedServicesData);
        setCompletedServices(completedServicesData);
        setCanceledServices(canceledServicesData);
    }, [booking]);

    useEffect(() => {
        const getBooking = async () => {
            try {
                const request = await axios.get(`/auth/customer/booking`);
                const response: AxiosResponse = await request.data;

                if (response.status) {
                    const Booking = response.data.bookings.data;
                    setBooking(Booking);
                }
            } catch (error) {
                setBooking([]);
            }
            setLoading(false);
        };
        getBooking();
    }, []);

    return (
        <div className="grid grid-cols-4 grid-flow-col gap-20 relative w-full py-10 xl:pt-10">
            <BookingTab tab={tab} setTab={setTab} />
            <div className="col-span-3">
                {tab === "all-services" &&
                    booking.map((service, index) => (
                        <Services
                            key={service.id}
                            index={index + 1}
                            service={service}
                        />
                    ))}
                {tab === "pending" &&
                    pendingServices.map((service, index) => (
                        <Services
                            key={service.id}
                            index={index + 1}
                            service={service}
                        />
                    ))}
                {tab === "accepted" &&
                    acceptedServices.map((service, index) => (
                        <Services
                            key={service.id}
                            index={index + 1}
                            service={service}
                        />
                    ))}
                {tab === "completed" &&
                    completedServices.map((service, index) => (
                        <Services
                            key={service.id}
                            index={index + 1}
                            service={service}
                        />
                    ))}
                {tab === "canceled" &&
                    CanceledServices.map((service, index) => (
                        <Services
                            key={service.id}
                            index={index + 1}
                            service={service}
                        />
                    ))}
            </div>
        </div>
    );
};

export const BookingTab = ({tab, setTab}: {tab: string; setTab: any}) => {
    return (
        <div className=" -mb-px text-sm font-medium text-gray-500 dark:text-gray-400">
            <li
                onClick={() => setTab("all-services")}
                className={`mr-2 list-none ${
                    tab === "all-services" ? "bg-primary-100" : null
                }`}
            >
                <a
                    href="#"
                    className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                    <Image
                        src={selectIcon}
                        alt="Description"
                        width={25}
                        height={25}
                        className="mt-0 mb-0"
                    />
                    <span className="ml-2"> All Services</span>
                </a>
            </li>
            <li
                onClick={() => setTab("pending")}
                className={`mr-2 list-none ${
                    tab === "pending" ? "bg-primary-100" : null
                }`}
            >
                <a
                    href="#"
                    className="inline-flex items-center justify-start	 p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                    aria-current="page"
                >
                    <Image
                        src={PendingIcon}
                        alt="Description"
                        width={25}
                        height={25}
                        className="mt-0 mb-0"
                    />
                    <span className="ml-2">Pending</span>
                </a>
            </li>
            <li
                onClick={() => setTab("accepted")}
                className={`mr-2 list-none ${
                    tab === "accepted" ? "bg-primary-100" : null
                }`}
            >
                <a
                    href="#"
                    className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                    <Image
                        src={progressIcon}
                        alt="Description"
                        width={25}
                        height={25}
                        className="mt-0 mb-0"
                    />
                    <span className="ml-2">Accepted</span>
                </a>
            </li>
            <li
                onClick={() => setTab("completed")}
                className={`mr-2 list-none ${
                    tab === "completed" ? "bg-primary-100" : null
                }`}
            >
                <a
                    href="#"
                    className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                    <Image
                        src={completedIcon}
                        alt="Description"
                        width={25}
                        height={25}
                        className="mt-0 mb-0"
                    />
                    <span className="ml-2"> Completed</span>
                </a>
            </li>
            <li
                onClick={() => setTab("canceled")}
                className={`mr-2 list-none ${
                    tab === "canceled" ? "bg-primary-100" : null
                }`}
            >
                <a
                    href="#"
                    className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                    <Image
                        src={cancelIcon}
                        alt="Description"
                        width={25}
                        height={25}
                        className="mt-0 mb-0"
                    />
                    <span className="ml-2">Canceled</span>
                </a>
            </li>
        </div>
    );
};

export const Services = ({service, index}: {service?: any; index?: number}) => {
    if (!service) {
        return <p>No Data</p>;
    }

    const {service: serv, customer, id} = service;

    const {name, price, image, created_at, short_description} = serv;
    const dateTime = convertTimestampToDesiredFormat(created_at);

    return (
        <Link href={`service-tracker/${id}`}>
            <div className="grid mb-4 flex-col w-full bg-primary-50  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                <div className="flex py-3 sm:py-4 px-4  space-x-4">
                    <h1 className="text-2xl text-black font-medium">{index}</h1>
                    <div>
                        <Image
                            height={100}
                            width={100}
                            className="m-0"
                            src={image}
                            alt="Neil image"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h6 className="text-lg capitalize color-black font-medium mr-10 leading-6">
                            {name || ""}
                        </h6>
                        <h6 className="text-sm flex items-center gap-2 text[#868686]">
                            <Settings color="#868686" size={15} /> IT
                            {short_description}
                        </h6>
                        <h6 className="text-sm flex items-center  gap-2 text[#868686]">
                            <MapPin color="#868686" size={15} />
                            {customer.address.city} {customer.address.zip}{" "}
                            {customer.address.apartment_name}
                        </h6>
                    </div>
                    <div className="flex flex-col items-start dark:text-white h-full">
                        <h6 className="text-base text-gray-900">
                            Date: {dateTime.date}, Time: {dateTime.time}
                        </h6>
                        <h6 className="text-2xl text-primary-500 font-medium mt-5">
                            ৳{price || 0}
                        </h6>
                    </div>
                </div>
            </div>
        </Link>
    );
};
