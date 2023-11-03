import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://awesomecoder.dev",
			lastModified: new Date(),
		},
		{
			url: "https://awesomecoder.dev/about",
			lastModified: new Date(),
		},
		{
			url: "https://awesomecoder.dev/skills",
			lastModified: new Date(),
		},
		{
			url: "https://awesomecoder.dev/projects",
			lastModified: new Date(),
		},
		{
			url: "https://awesomecoder.dev/testimonials",
			lastModified: new Date(),
		},
		{
			url: "https://awesomecoder.dev/contact",
			lastModified: new Date(),
		},
	];
}
