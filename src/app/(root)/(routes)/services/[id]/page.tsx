// "use client";
import React, { Fragment } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { constructMetadata, price, url } from "@/lib/utils";
import fetch from "@/lib/featch";
import Contents from "@/components/Contents";
import { Col, Row } from "@/components/Note";
import BlurImage from "@/components/BlurImage";
import { Heading } from "@/components/Heading";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Rating } from "@/components/Ratings";
import axios from "@/lib/axios";


type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

async function getService(id: string): Promise<Service | null> {
    try {
      const response: AxiosResponse = await axios.get(`service/details/${id}`);
      const service: Service = response?.data?.data.service;
      return service || null;
    } catch (error) {
      return null;
    }
  }


// export async function generateMetadata(
// 	{ params, searchParams }: Props,
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	// read route params
// 	const id = params.id;

// 	// fetch data
// 	const req = await fetch(url(`service/details/${id}`));

// 	if (!req.ok) {
// 		return constructMetadata({
// 			title: `Not Found`,
// 			description: "One-stop Solution for your Services.",
// 		});
// 		// throw new Error("Failed to fetch data");
// 	}

// 	const res = (await req.json()) as AxiosResponse;

// 	const service: Service = res?.data?.data?.service;

// 	return constructMetadata({
// 		title: `${service.name}`,
// 		description: "One-stop Solution for your Services.",
// 	});
// }

export default async function Service({ params, searchParams }: Props) {
	const service = await getService(`${params.id}`);
	if (!service) {
		notFound();
	}

	return (
		<Contents className="max-w-6xl mx-auto ">
			<Row className="relative md:py-5 py-0 mt-5 pb-10">
				<Col className="relative">
					<div className="relative overflow-hidden flex lg:items-start lg:justify-end items-center justify-start pb-8 px-8 cursor-pointer">
						<BlurImage
							// src={service?.image}
							src="https://images.unsplash.com/photo-1573868388390-2739872961e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
							height={400}
							width={400}
							alt=""
							sizes="(min-width: 1024px) 32rem, 20rem"
							className="lg:aspect-[10/7] md:aspect-[10/4] aspect-[10/6] w-full m-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 drop-shadow-xl"
						/>
					</div>
				</Col>
				<Col className="relative space-y-5">
					<Heading
						level={1}
						className="text-balance xl:text-5xl lg:text-4xl md:text-3xl text-2xl line-clamp-2 pb-1.5"
					>
						{service?.name}
					</Heading>
					<Heading level={1} className="text-balance">
						Service Cost :{" "}
						<span className="text-primary-500">
						৳ {service?.price}
						</span>
					</Heading>
					<Button
						variant="filled"
						className="bg-primary-500/90 hover:bg-primary-500 rounded-md font-semibold px-4 py-3 flex items-center space-x-1"
					>
						<Rating className="h-8 w-8" />
						<span className="text-xl font-semibold">
							{service.avg_rating}{" "}
						</span>
						<span className="text-sm font-semibold">
							out of 5 
							({service?.rating_count})
						</span>
					</Button>
					<Button
						variant="filled"
						className="bg-primary-500/90 hover:bg-primary-500 rounded-md font-semibold px-8 py-3 flex items-center space-x-1 text-3xl"
					>
						Schedule Order
					</Button>
				</Col>
			</Row>
			<p>{service?.short_description}</p>
			<p>{service?.long_description}</p>
		</Contents>
		
	);
}