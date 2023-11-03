"use client";

import React, { Fragment, ReactNode } from "react";
import Contents from "@/components/Contents";
import { Heading } from "@/components/Heading";
import Link from "next/link";

export default function TermsAndConditions() {
	return (
		<Contents className="max-w-6xl mx-auto ">
			<Heading level={1}>Terms and Conditions</Heading>

			<div className="relative w-full py-10 xl:pt-20">
				<Heading
					level={1}
					className="uppercase text-balance lg:text-3xl md:text-3xl text-2xl"
				>
					TERMS AND CONDITIONS
				</Heading>
				<Heading level={2} className="py-4">
					Last updated March 20, 2023
				</Heading>

				<Heading
					level={1}
					className="py-8 uppercase text-balance lg:text-4xl md:text-3xl text-2xl"
				>
					AGREEMENT TO OUR LEGAL TERMS
				</Heading>

				<div className="relative py-2 space-y-10">
					<p className="lead text-balance">
						We are Troubleshoot Ltd ("Company," "we," "us," "our"),
						a company registered in Bangladesh at House#11 Rd 11,
						Dhaka 1212, Bangladesh, Dhaka, Dhaka Division 1212.
					</p>

					<p className="lead text-balance">
						We operate the website{" "}
						<a href="/" target="_blank" rel="noopener noreferrer">
							https://troubleshoot.com.bd/
						</a>{" "}
						(the "Site"), the mobile application Troubleshoot LTD
						(the "App"), as well as any other related products and
						services that refer or link to these legal terms (the
						"Legal Terms") (collectively, the "Services").
					</p>

					<p className="lead text-balance pt-8">
						Troubleshoot is a start-up organization offering
						residents of Bangladesh a complete IT corporate service.
						By developing the reputation as a qualified, reasonably
						priced and trusted service provider, troubleshoot
						quickly generated market penetration and develop a solid
						foundation of repeat customers. We are here to make your
						corporate life run smoothly! We work on demand subject
						to availability, nevertheless arrive on time, and are
						available for a same day call-outs wherever possible.
						Our multi-skilled troubleshooters work alone unless
						otherwise requested by customers. We are always here to
						help, at a time that suits you.
					</p>

					<Heading level={1} className="py-4">
						1. OUR SERVICES
					</Heading>

					<p className="lead text-balance">
						The information provided when using the Services is not
						intended for distribution to or use by any person or
						entity in any jurisdiction or country where such
						distribution or use would be contrary to law or
						regulation or which would subject us to any registration
						requirement within such jurisdiction or country.
						Accordingly, those persons who choose to access the
						Services from other locations do so on their own
						initiative and are solely responsible for compliance
						with local laws, if and to the extent local laws are
						applicable.
					</p>

					<p className="lead text-balance">
						The Services are not tailored to comply with
						industry-specific regulations (Health Insurance
						Portability and Accountability Act (HIPAA), Federal
						Information Security Management Act (FISMA), etc.), so
						if your interactions would be subjected to such laws,
						you may not use the Services. You may not use the
						Services in a way that would violate the
						Gramm-Leach-Bliley Act (GLBA).
					</p>
				</div>
			</div>
		</Contents>
	);
}
