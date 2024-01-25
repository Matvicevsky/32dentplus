/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
	reactStrictMode: true,

	swcMinify: true,
	images: {
		unoptimized: true,
	},
	basePath: '',
}

module.exports = nextConfig
