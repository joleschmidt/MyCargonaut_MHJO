/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	trailingSlash: true,
	eslint: {
		dirs: ["pages", "utils", "images"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
	images: {
		loader: "akamai",
		path: "",
	},
};
