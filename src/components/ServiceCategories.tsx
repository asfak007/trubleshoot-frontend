"use client";

import React, { Fragment, useEffect, useState } from "react";
import { ArrowIcon } from "@/components/Icons";
import axios from "@/lib/axios";
import { chunk, cn, url } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Properties, Property, Row, Col, Note } from "@/components/Note";
import { Prose } from "@/components/Prose";
import BlurImage from "./BlurImage";
import Link from "next/link";
import { Heading } from "./Heading";

interface ServiceCategoriesProps {
  categories?: Category[];
}

export const ServiceCategories: React.FC<ServiceCategoriesProps> = ({ categories }) => {
  const [categoriesList, setCategoriesList] = useState(chunk(categories ?? [], 10));
  const [loading, setLoading] = useState<boolean>(true);
  const [services, setServices] = useState<Service[]>([]);
  const [cats, setCats] = useState<Category[]>(categoriesList[0] ?? []);
  const [activeCategory, setActiveCategory] = useState<number>(cats[0]?.id ?? 0);
  const [activeSubcategory, setActiveSubcategory] = useState<number>(0);
  const [activeId, setActiveId] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<number>(cats[0]?.id ?? 0);


  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true);
        const request = await axios.get(`/categories/${activeFilter}?services=true`);
        const response: AxiosResponse = await request.data;
        if (response.status) {
          const categories = response.data.categories;
          const services = categories.services ?? [];
          setServices(services);
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setServices([]);
      }
      setLoading(false);
    };
    getServices();
  }, [activeFilter]);

  return (
    <Fragment>
      <Col className="xl:col-span-3 lg:col-span-3">
        <Prose enable={false} className="relative space-y-4 py-4 px-6 rounded-md shadow">
          {cats?.map((category) => (
            <Fragment key={category.id}>
              <div
                className={cn(
                  "relative flex items-center rounded-xl px-3 py-2 cursor-pointer",
                  activeCategory == category.id ? "bg-primary-100" : "bg-primary-50/50 hover:bg-primary-50"
                )}
                onClick={(e) => {
                  setActiveCategory(category.id);
                  setActiveSubcategory(0);
                  setActiveFilter(category.id);
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full mr-2.5 bg-primary-600"></span>
                <p className="text-sm font-semibold">{category.name}</p>
                {(category.subcategories?.length ?? 0) != 0 && (
                  <div
                    className="h-full w-10 absolute right-0 top-0 flex items-center justify-center"
                    // @ts-ignore
                    onClick={(e) => setActiveId((prev) => (prev == category.id ? 0 : category.id))}
                  >
                    <ArrowIcon className={cn("h-3 w-3 text-primary-600", activeId == category.id && "rotate-[360deg]")} />
                  </div>
                )}
              </div>

              {(category.subcategories?.length ?? 0) != 0 && (
                <Fragment>
                  <div className={cn("relative pl-4 space-y-4", activeId != category.id && "hidden")}>
                    {category.subcategories?.map((subcategory) => (
                      <Fragment key={subcategory.id}>
                        <div
                          className={cn(
                            "relative flex items-center rounded-xl px-3 py-2 cursor-pointer",
                            activeSubcategory == subcategory.id && subcategory.parent_id == activeCategory
                              ? "bg-primary-100"
                              : "bg-primary-50/50 hover:bg-primary-50"
                          )}
                          onClick={(e) => {
                            setActiveFilter(subcategory.id);
                            setActiveSubcategory(subcategory.id);
                            setActiveCategory(subcategory.parent_id);
                          }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full mr-2.5 bg-primary-600"></span>
                          <p className="text-sm font-semibold">{subcategory.name}</p>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              )}
            </Fragment>
          ))}
        </Prose>
      </Col>
      <Col className="xl:col-span-7 lg:col-span-7">
        <Prose enable={false} className="relative p-4 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {loading ? (
            <Fragment>
              {Array.from({ length: 10 }).map((_, i) => (
                <ServiceSkeleton className={cn(i > 8 && "lg:hidden")} key={i} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {services?.map((service, i) => (
                <Fragment key={service.id}>
                  <Link href={`/services/${service.id}`} className={cn("relative bg-white h-auto cursor-pointer")}>
                    <div className="relative rounded-xl overflow-hidden shadow-md flex lg:items-start lg:justify-end items-center justify-start">
                      <BlurImage
                        src={service.image}
                        height={400}
                        width={400}
                        alt=""
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        className="lg:aspect-[12/7] md:aspect-[10/4] aspect-[10/6] w-full m-0 bg-zinc-50/50 object-cover dark:bg-zinc-800"
                      />
                    </div>

                    <div className="relative px-1 py-1.5">
                      <Heading level={2} className="font-semibold">
                        {service?.name}
                      </Heading>
                    </div>
                  </Link>
                </Fragment>
              ))}
            </Fragment>
          )}
        </Prose>
      </Col>
    </Fragment>
  );
};

const ServiceSkeleton = ({ ...props }) => {
  return (
    <div className={cn("relative bg-white drop-shadow h-auto rounded-lg overflow-hidden cursor-pointer", props?.className)}>
      <Skeleton className="lg:aspect-[12/7] md:aspect-[10/4] aspect-[10/6] w-full flex justify-center items-center">
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
      </div>
    </div>
  );
};
