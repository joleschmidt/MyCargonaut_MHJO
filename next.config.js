/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	eslint: {
		dirs: ["pages", "utils", "images"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},
};
