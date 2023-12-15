/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	// swcMinify: true,
	images: {
		loader: 'akamai',
		path: process.env.NEXT_PUBLIC_URL_PATH,
	},

	// Add basePath
	basePath: '/github-pages/',
}

module.exports = nextConfig
