/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	// swcMinify: true,
	images: {
		loader: 'akamai',
		path: '/32dentplus/',
	},

	// // Add basePath
	basePath: '/github-pages/',
}

module.exports = nextConfig
