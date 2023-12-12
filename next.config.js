/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	// swcMinify: true,
	images: {
		loader: 'akamai',
		path: '/',
	},

	// // Add basePath
	basePath: '/github-pages/32dentplus/',
}

module.exports = nextConfig
