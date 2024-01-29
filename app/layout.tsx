import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'react-photo-view/dist/react-photo-view.css'

import { Roboto } from 'next/font/google'

import './globals.css'

import { ModalProvider } from '@/components/provaiders/modal-provider'
import { MapProvider } from '@/components/y-map-loader'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

const roboto = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const apiUrl = `https://api-maps.yandex.ru/3.0/?apikey=${process.env.NEXT_PUBLIC_YANDEX_KEY}&lang=ru_RU`
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
				<MapProvider apiUrl={apiUrl}>{children}</MapProvider>
				<Footer />
			</body>
		</html>
	)
}
