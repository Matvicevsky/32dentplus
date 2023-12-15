/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	// swcMinify: true,
	images: {
		unoptimized: true,
		loader: 'akamai',
		path: process.env.NEXT_PUBLIC_URL_PATH || '/',
	},

	// Add basePath
	basePath: process.env.NEXT_PUBLIC_URL_PATH || '/',
}

module.exports = nextConfig
