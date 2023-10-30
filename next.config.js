/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"www.google.com",
			"avatar.vercel.sh",
			"faisalman.github.io",
			"avatars.dicebear.com",
			"res.cloudinary.com",
			"pbs.twimg.com",
			"d2vwwcvoksz7ty.cloudfront.net",
			"lh3.googleusercontent.com",
			"awesomecoder.dev",
			"fakestoreapi.com",
			"api.troubleshoot.co.bd",
			"images.unsplash.com",
			'troubleshootprovider.asthaall.com'
		],
	},
	// poweredByHeader: false,
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true,
		serverActions: true,
	},
	// async headers() {
	// 	return [
	// 		{
	// 			source: "/api/auth/stripe/:path*",
	// 			headers: [
	// 				{
	// 					key: "Cache-Control",
	// 					value: "no-cache no-store, max-age=0",
	// 				},
	// 			],
	// 		},
	// 		// {
	// 		// 	source: "/subscriptions",
	// 		// 	headers: [
	// 		// 		{
	// 		// 			key: "Cache-Control",
	// 		// 			value: "no-cache no-store, max-age=0",
	// 		// 		},
	// 		// 	],
	// 		// },
	// 	];
	// },
};

module.exports = nextConfig;
