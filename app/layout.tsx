import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'react-photo-view/dist/react-photo-view.css'

import { Roboto } from 'next/font/google'

import type { Metadata } from 'next'
import './globals.css'

import { ModalProvider } from '@/components/provaiders/modal-provider'
import { YMapLoader } from '@/components/y-map-loader'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import NextBreadcrumb from '@/components/breadcrumb'

export const metadata: Metadata = {
	title: '32 Dent plus home page',
	icons: '/favicon.ico',
}

const roboto = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html className='scroll-smooth' lang='ru'>
			<body
				className={cn(
					'bg-secondary text-primary relative font-light',
					roboto.className
				)}
			>
				<ModalProvider />
				<Navbar />
				<NextBreadcrumb
					homeElement={'Home'}
					separator={<span>{'>'}</span>}
					activeClasses='font-normal'
					containerClasses='flex py-5 md:pl-8 text-sm md:text-base'
					listClasses='hover:underline mx-2'
					capitalizeLinks
				/>
				{children}
				<Footer />
				<YMapLoader />
			</body>
		</html>
	)
}
