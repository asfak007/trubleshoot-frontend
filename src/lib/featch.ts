import nodeFetch from "node-fetch";

export const fetch = async (url?: any, options?: any) => {
	const agent = new (require("https").Agent)({
		rejectUnauthorized: false, // Bypass SSL verification
	});

	// Merge custom agent into options
	const modifiedOptions = {
		...options,
		agent,
	};

	return nodeFetch(url, modifiedOptions);
};

export default fetch;
