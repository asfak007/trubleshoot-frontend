"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Properties, Property, Row, Col, Note } from "@/components/Note";
import { Prose } from "@/components/Prose";
import { Button } from "@/components/Button";
import { ArrowRightIcon } from "@/components/Icons";
import { Mail, Phone, PhoneCall } from "lucide-react";
import { contactFormSchema } from "@/lib/validator";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { LoadingCircle } from "@/components/animation/Loading";
import axios from "@/lib/axios";
import { Heading } from "./Heading";
import Link from "next/link";

const ContactUs = ({ featured = false }: { featured?: boolean }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
		try {
			setLoading(true);
			let data = new FormData();
			data.append("name", values.name);
			data.append("email", values.email);
			data.append("subject", values.subject);
			data.append("message", values.message);
			data.append("type", "contact");

			await new Promise((resolve) => setTimeout(resolve, 4000));

			const request = await axios.post("/api/contact", values);
			const response = await request.data;
			if (response.success) {
				toast.success(response.message);
				form.reset();
			} else {
				toast.error("Something went wrong!");
			}
			setLoading(false);

			// const req = await fetch(GOOGLE_APP_ENDPOINT, {
			// 	method: "POST",
			// 	body: data,
			// });
		} catch (error) {
			setLoading(false);
			toast.error("Something went wrong!");
		}
	};

	return (
		<Fragment>
			<Row className="relative lg:grid-cols-8 md:py-5 py-0 mt-5 pb-10">
				<Col className="lg:col-span-3 flex">
					<div className="relative">
						<Heading
							level={1}
							className="text-balance lg:text-5xl md:text-4xl text-3xl"
						>
							You can Contact us for an problem you have
						</Heading>

						<Heading level={1} className="py-8">
							Ask us anything or just say hi...
						</Heading>

						<div className="relative space-y-4">
							<Link
								href="tel:+8809677889900"
								className="flex items-center"
							>
								<Phone className="h-4 w-4 mr-2 text-primary-500" />
								<span className="font-bold text-sm text-slate-900">
									+8809677889900
								</span>
							</Link>

							<Link
								href="mailto:info@troubleshoot.com.bd"
								className="flex items-center"
							>
								<Mail className="h-4 w-4 mr-2 text-primary-500" />
								<span className="font-bold text-sm text-slate-900">
									info@troubleshoot.com.bd
								</span>
							</Link>
						</div>
					</div>
				</Col>
				<Col className="lg:col-span-5 ">
					<Prose enable={false}>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-5 lg:px-4"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input
													disabled={loading}
													className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
													placeholder="Your Name"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													disabled={loading}
													className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
													placeholder="yourname@example.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="subject"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Subject</FormLabel>
											<FormControl>
												<Input
													disabled={loading}
													className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
													placeholder="Let us know how we can help you."
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem className="space-y-0 sm:col-span-2">
											<FormLabel>Your message</FormLabel>
											<FormControl>
												<textarea
													disabled={loading}
													rows={6}
													className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
													placeholder="Leave a comment..."
													{...field}
												></textarea>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									// variant="text"
									disabled={loading}
									type="submit"
									arrow={!loading ? "right" : undefined}
									className="py-2 px-5 bg-primary-700/90 hover:bg-primary-700"
								>
									Send message
									{loading && (
										<LoadingCircle className="h-5 w-5 -mr-1 mt-0.5" />
									)}
								</Button>
							</form>
						</Form>
					</Prose>
				</Col>
			</Row>
		</Fragment>
	);
};

export default ContactUs;
