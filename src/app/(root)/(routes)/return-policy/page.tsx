"use client";

import React, { Fragment, ReactNode } from "react";
import Contents from "@/components/Contents";
import { Heading } from "@/components/Heading";
import Link from "next/link";

export default function ReturnPolicy() {
	return (
		<Contents className="max-w-6xl mx-auto ">
			<Heading level={1}>Return policy</Heading>

			<div className="relative w-full py-10 xl:pt-20">
				<Heading
					level={1}
					className="uppercase text-balance lg:text-3xl md:text-3xl text-2xl"
				>
					Return policy
				</Heading>
				<Heading level={2} className="py-4">
					Last updated March 20, 2023
				</Heading>

				<div className="relative py-2 space-y-10">
					<p className="lead text-balance">
						Thank you for your purchase. We hope you are happy with
						your purchase. However, if you are not completely
						satisfied with your purchase for any reason, you may
						return it to us for store credit only. Please see below
						for more information on our return policy.
					</p>

					<Heading level={1} className="py-4">
						RETURNS
					</Heading>

					<p className="lead text-balance">
						All returns must be postmarked within three (3) days of
						the purchase date. All returned items must be in new and
						unused condition, with all original tags and labels
						attached.
					</p>

					<Heading level={1} className="py-4">
						RETURN PROCESS
					</Heading>

					<p className="lead text-balance">
						To return an item, place the item securely in its
						original packaging and the return form provided, then
						mail your return to the following address:
						<br />
						<br />
						Troubleshoot Ltd <br />
						Attn: Returns <br />
						Road 11, House 11, Banani, <br />
						Dhaka, Dhaka 1213 <br />
						Bangladesh <br />
					</p>

					<p className="lead text-balance">
						You may also use the prepaid shipping label enclosed
						with your package. Return shipping charges will be paid
						or reimbursed by us.
					</p>
				</div>
			</div>
		</Contents>
	);
}
