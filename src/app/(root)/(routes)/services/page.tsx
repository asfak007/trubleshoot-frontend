import React from "react";
import { Prose } from "@/components/Prose";
import Contents from "@/components/Contents";
import { cn, truncate, url } from "@/lib/utils";
import { notFound, useRouter } from "next/navigation";
import { Heading } from "@/components/Heading";
import BlurImage from "@/components/BlurImage";
import aboutImage from "@/images/about.png";
import { Properties, Property, Row, Col, Note } from "@/components/Note";
import { ServiceCategories } from "@/components/ServiceCategories";
import fetch from "@/lib/featch";

const getCategories = async () => {
  try {
    const req = await fetch(`${url("/categories?subcategories=true")}`);
    if (!req.ok) {
      throw new Error("Failed to fetch data");
    }
    const res = (await req.json()) as AxiosResponse;
    return res?.data?.categories ?? [];
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export default async function Services() {
  const categories = await getCategories();

  return (
    <Contents className="max-w-6xl mx-auto ">
      <div className="relative w-full">
        <Heading level={1}>All Services</Heading>
        <Row className="relative lg:grid-cols-10 md:py-5 py-0 mt-5 pb-10">
          <ServiceCategories categories={categories} />
        </Row>
      </div>
    </Contents>
  );
}
