"use client";
import {
	ChevronRightIcon,
	HomeIcon,
	LinkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { capitalize, cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

type LinkItem = {
	link: string;
	text: string;
};

const Breadcrumbs = () => {
	const pathname = usePathname();
	let endpoint = "/";
	let endpoints = pathname.split("/").filter(function (segment) {
		return segment.length > 0; // Exclude empty segments
	});
	const links: LinkItem[] = endpoints.map((item) => {
		endpoint += `${item}/`;
		return { text: capitalize(item), link: `${endpoint}/` };
	});

	return (
		<>
			<nav aria-label="Breadcrumb" className="flex items-center pb-6">
				<ol
					role="list"
					className="flex items-center overflow-x-auto whitespace-nowrap"
				>
					<Link
						href="/dashboard"
						className="text-gray-600 dark:text-gray-200"
					>
						<HomeIcon className="w-[17px] h-[17px] " />
					</Link>

					{links?.map((item, index) => (
						<Fragment key={item.link}>
							{item.text && item.text && (
								<Fragment>
									<span className="mx-1.5 text-gray-500 dark:text-gray-300">
										<ArrowRightIcon
											className="flex-shrink-0 w-[17px] h-[17px] mt-0.5 stroke-[1]"
											aria-hidden="true"
										/>
									</span>

									<Link
										href={`${item.link}`}
										className={cn(
											"flex items-center text-gray-600 -px-2 dark:text-gray-200 hover:underline",
											index == endpoints.length - 1 &&
												"text-primary-500 dark:text-primary-500"
										)}
									>
										{item.text}
									</Link>
								</Fragment>
							)}
						</Fragment>
					))}
				</ol>
			</nav>
		</>
	);
};

export default Breadcrumbs;

export const BreadcrumbsSkeleton = () => {
	return (
		<Fragment>
			<div className="flex h-10 items-center space-x-2 pb-6 mt-2">
				<div className="flex items-center space-x-2">
					<div className="h-5 w-5 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-50/25" />
					<div className="h-2 w-3 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-50/25" />
					<div className="h-5 w-[58px] animate-pulse rounded-md bg-gray-200 dark:bg-zinc-50/25" />
				</div>
				<div className="flex items-center space-x-2">
					<div className="h-2 w-3 animate-pulse rounded-full bg-gray-200 dark:bg-zinc-50/25" />
					<div className="h-5 w-36 animate-pulse rounded-md bg-gray-200 dark:bg-zinc-50/25" />
				</div>
			</div>
		</Fragment>
	);
};
