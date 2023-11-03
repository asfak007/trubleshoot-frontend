"use client";
import BlurImage from "@/components/BlurImage";
import {Rating} from "@/components/Ratings";
import {Skeleton} from "@/components/ui/skeleton";
import axios from "@/lib/axios";
import {cn, nFormatter, price} from "@/lib/utils";
import {MapPinIcon} from "lucide-react";
import Link from "next/link";
import React, {Fragment, useEffect, useState} from "react";

interface ServicesProps {
    services: Service[]; // Make sure the expected prop name and type match
}

export const Services: React.FC<ServicesProps> = ({services}) => {
    return (
        <Fragment>
            <div className="relative w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {services?.map((service, i) => (
                    <Service
                        className={cn(
                            i > 7 && "xl:hidden",
                            i > 8 && "lg:hidden"
                        )}
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </Fragment>
    );
};

interface ServiceProps {
    service: Service; // Make sure the expected prop name and type match
    className?: string;
}

export const Service: React.FC<ServiceProps> = ({service, className}) => {
    return (
        <Fragment>
            <Link
                href={`/services/${service.id}`}
                className={cn(
                    "relative bg-white shadow-md rounded-lg h-auto overflow-hidden",
                    className
                )}
            >
                <div className="relative overflow-hidden h-44 bg-gray-50 flex items-center justify-center">
                    <BlurImage
                        src={service.image}
                        alt=""
                        width={400}
                        height={200}
                        className="relative object-cover"
                    />
                </div>
                <div className="relative p-3 space-y-2">
                    <h2 className="font-semibold text-sm text-balance w-48 line-clamp-2">
                        {service.name}
                    </h2>
                    <h4 className="flex items-center font-semibold text-xs text-slate-500">
                        <MapPinIcon className="h-3.5 w-3.5 mr-1" /> Dhaka
                    </h4>
                    <h3 className="text-lg font-semibold text-primary-700">
                        {price(parseInt(service.price))}{" "}
                        <span className="text-slate-400 text-xs">
                            /services
                        </span>
                    </h3>
                    <div className="absolute top-2 right-2">
                        <div className="relative flex justify-center items-center">
                            <Rating className="text-primary-500" />
                            <p className="text-sm text-slate-400 pr-1 font-semibold leading-none">
                                {nFormatter(service.rating_count)}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
};

export const RecommendedServices = ({zone = 1}) => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const getServices = async () => {
            try {
                const request = await axios.get(
                    `/service/recommended?zone_id=${zone}`
                );
                const response: AxiosResponse = await request.data;

                if (response.status) {
                    const services = response.data.services;
                    setServices(services);
                }
            } catch (error) {
                setServices([]);
            }
            setLoading(false);
        };
        getServices();
    }, []);

    return (
        <Fragment>
            {loading ? (
                <Fragment>
                    <div className="relative w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {Array.from({length: 10}).map((_, i) => (
                            <ServiceSkeleton
                                className={cn(
                                    i > 7 && "xl:hidden",
                                    i > 8 && "lg:hidden"
                                )}
                                key={i}
                            />
                        ))}
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <Services services={services} />
                </Fragment>
            )}
        </Fragment>
    );
};

const ServiceSkeleton = ({...props}) => {
    return (
        <div
            className={cn(
                "relative bg-white shadow-md h-72 rounded-lg overflow-hidden",
                props?.className
            )}
        >
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
                    <MapPinIcon className="h-3.5 w-3.5 mr-1 animate-pulse" />{" "}
                    <Skeleton className="h-3 w-12" />
                </h4>
                <div className="flex space-x-2 overflow-hidden">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-16" />
                </div>
            </div>
        </div>
    );
};
