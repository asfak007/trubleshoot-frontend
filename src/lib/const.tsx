import logoAnimaginary from "@/images/logos/animaginary.svg";
import logoCosmos from "@/images/logos/cosmos.svg";
import logoHelioStream from "@/images/logos/helio-stream.svg";
import logoOpenShuttle from "@/images/logos/open-shuttle.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";

import {
	Boxes,
	CheckCheck,
	GitCompare,
	HardDrive,
	Info,
	LayoutList,
	MousePointerClick,
	Phone,
	Server,
	Terminal,
} from "lucide-react";
import BlurImage from "@/components/BlurImage";

export const twitter = "https://twitter.com/@awesomecoderdev";
export const github = "https://github.com/awesomecoderdev";
export const facebook = "https://facebook.com/awesomecoderdev";
export const discord = "https://discordapp.com/users/1006478863385231400";
export const linkedin = "https://linkdin.com/awesomecoderdev";
export const instagram = "https://www.instagram.com/awesomecoderdev";

export const navigations = [
	{
		title: "Mohammad Ibrahim Kholil",
		links: [
			{
				title: "About",
				href: "/about",
				// icon: Info,
				// icon: MousePointerClick,
				icon: GitCompare,
			},
			{
				title: "Skills",
				href: "/skills",
				icon: Terminal,
				// sections: [
				// 	{
				// 		title: "Languages",
				// 		links: [
				// 			{
				// 				title: "HTML",
				// 				href: "/skills/#html",
				// 				icon: Terminal,
				// 				tag: "POST",
				// 			},
				// 			{
				// 				title: "CSS",
				// 				href: "/skills/#css",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "JavaScript",
				// 				href: "/skills/#javascript",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "TypeScript",
				// 				href: "/skills/#typescript",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "NODE",
				// 				href: "/skills/#node",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "PHP",
				// 				href: "/skills/#php",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "PHP [OOP]",
				// 				href: "/skills/#php-oop",
				// 				icon: Terminal,
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "UI / Library",
				// 		links: [
				// 			{
				// 				title: "SCSS",
				// 				href: "/skills/#scss",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Bootstrap",
				// 				href: "/skills/#bootstrap",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Tailwind",
				// 				href: "/skills/#tailwind",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Shadcn UI",
				// 				href: "/skills/#shadcn",
				// 				icon: Terminal,
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "Frameworks",
				// 		links: [
				// 			{
				// 				title: "React.JS",
				// 				href: "/skills/#react",
				// 				icon: Terminal,
				// 			},
				// 			,
				// 			{
				// 				title: "Next.JS",
				// 				href: "/skills/#next",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Three.JS",
				// 				href: "/skills/#three",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "Laravel",
				// 				href: "/skills/#laravel",
				// 				icon: Terminal,
				// 			},
				// 			{
				// 				title: "WordPress",
				// 				href: "/skills/#wordpress",
				// 				icon: Terminal,
				// 			},
				// 		],
				// 	},
				// ],
			},
			{
				title: "Projects",
				href: "/projects",
				icon: Boxes,
			},
			{
				title: "Testimonials",
				href: "/testimonials",
				icon: LayoutList,
			},
			{
				title: "Contact",
				href: "/contact",
				icon: Phone,
			},
		],
	},
	{
		title: "Languages",
		links: [
			{
				title: "HTML",
				href: "/skills/#html",
				icon: Terminal,
			},
			{
				title: "CSS",
				href: "/skills/#css",
				icon: Terminal,
			},
			{
				title: "JavaScript",
				href: "/skills/#javascript",
				icon: Terminal,
			},
			{
				title: "TypeScript",
				href: "/skills/#typescript",
				icon: Terminal,
			},
			{
				title: "NODE.JS",
				href: "/skills/#nodejs",
				icon: Terminal,
			},
			{
				title: "PHP [OOP]",
				href: "/skills/#php",
				icon: Terminal,
			},
		],
	},
	{
		title: "UI / Library",
		links: [
			{
				title: "SCSS",
				href: "/skills/#scss",
				icon: Terminal,
			},
			{
				title: "Bootstrap",
				href: "/skills/#bootstrap",
				icon: Terminal,
			},
			{
				title: "Tailwind",
				href: "/skills/#tailwind-css",
				icon: Terminal,
			},
			// {
			// 	title: "Shadcn UI",
			// 	href: "/skills/#shadcn",
			// 	icon: Terminal,
			// },
		],
	},
	{
		title: "Frameworks",
		links: [
			{
				title: "React.JS",
				href: "/skills/#react",
				icon: Terminal,
			},
			,
			{
				title: "Next.JS",
				href: "/skills/#next",
				icon: Terminal,
			},
			{
				title: "Three.JS",
				href: "/skills/#three",
				icon: Terminal,
			},
			{
				title: "Laravel",
				href: "/skills/#laravel",
				icon: Terminal,
			},
		],
	},
	{
		title: "CMS",
		links: [
			{
				title: "WordPress Customization",
				href: "/skills/#wordpress-customization",
				icon: Terminal,
			},
			{
				title: "WordPress Custom Theme",
				href: "/skills/#wordpress-custom-theme",
				icon: Terminal,
			},
			{
				title: "WordPress Custom Plugin",
				href: "/skills/#wordpress-custom-plugin",
				icon: Terminal,
			},
			// {
			// 	title: "Grav CMS",
			// 	href: "/skills/#grav",
			// 	icon: Terminal,
			// },
		],
	},
	{
		title: "Database / Server",
		links: [
			{
				title: "MYSQL",
				href: "/skills/#mysql",
				icon: HardDrive,
			},
			{
				title: "MongoDB",
				href: "/skills/#mongodb",
				icon: HardDrive,
			},
			{
				title: "PostgreSQL",
				href: "/skills/#postgressql",
				icon: HardDrive,
			},
			{
				title: "Linux",
				href: "/skills/#linux",
				icon: Server,
			},
			{
				title: "Nginx",
				href: "/skills/#nginx",
				icon: Server,
			},
			{
				title: "Apache",
				href: "/skills/#apache",
				icon: Server,
			},
			{
				title: "Aws",
				href: "/skills/#aws",
				icon: Server,
			},
		],
	},
];
