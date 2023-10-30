"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Button } from "./Button";
import { useHydration } from "@/hooks/hydration";
import Cookies from "js-cookie";

const Cookie = () => {
	const [accepted, setAccepted] = useState<boolean>(true);

	useEffect(() => {
		const cookie = Cookies.get("cookie");

		if (cookie) {
			setAccepted(false);
		} else {
			setAccepted(true);
		}
	}, [accepted]);

	const acceptCookie = () => {
		setAccepted(false);
		Cookies.set("cookie", "true");
	};

	const declineCookie = () => {
		setAccepted(false);
		Cookies.set("cookie", "false");
	};

	return (
		<Fragment>
			{useHydration(
				<Fragment>
					{accepted && (
						<Fragment>
							<section className="fixed max-w-lg p-5 mx-auto xl:left-12 xl:bottom-16 bottom-5 ">
								<div className="relative p-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-2xl ">
									<h2 className="font-semibold text-gray-800 dark:text-white">
										🍪 Cookies & Privacy
									</h2>

									<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
										Is education residence conveying so so.
										Suppose shyness say ten behaved morning
										had. Any unsatiable assistance
										compliment occasional too reasonably
										advantages.
										<br />{" "}
										<a
											href="#"
											className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500"
										>
											More information
										</a>
										.{" "}
									</p>
									<div className="relative flex gap-4 pt-3">
										<Button
											variant="filled"
											className="text-xs bg-primary-500/90 hover:bg-primary-500 font-medium rounded-lg text-white px-3 duration-300 transition-colors focus:outline-none"
											onClick={acceptCookie}
										>
											Accept
										</Button>

										<Button
											variant="outline"
											className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg duration-300 transition-colors focus:outline-none"
											onClick={declineCookie}
										>
											Decline
										</Button>
									</div>
								</div>
							</section>
						</Fragment>
					)}
				</Fragment>
			)}
		</Fragment>
	);
};

export default Cookie;
