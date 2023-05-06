/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.freeimages.com",
				port: "",
				pathname: "/images/**",
			},
		],
	},
};
module.exports = nextConfig;
