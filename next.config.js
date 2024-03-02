/** @type {import('next').NextConfig} */

const { redirect } = require('next/dist/server/api-utils')

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
	reactStrictMode: true,

	swcMinify: true,
	images: {
		unoptimized: true,
	},
	basePath: '',
	async redirect() {
		return [
			{
				source: '/uslugi_cena',
				destination: '/',
				permanent: true,
			},
			{
				source: '/tur_po_klinike',
				destination: '/',
				permanent: true,
			},
			{
				source: '/komanda-vrachey',
				destination: '/doctors',
				permanent: true,
			},
			{
				source: '/ortodonty',
				destination: '/',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
