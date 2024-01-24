/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
	reactStrictMode: true,
	// output: 'export',
	// swcMinify: true,
	images: {
		unoptimized: true,
	},

	// Add basePath
	basePath: isProd ? '/89.111.153.50' : '',
}

module.exports = nextConfig
