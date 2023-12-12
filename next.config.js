/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	// swcMinify: true,
	images: {
		path: '/',
	},

	// // Add basePath
	basePath: '/github-pages',
}

module.exports = nextConfig
