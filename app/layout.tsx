import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'react-photo-view/dist/react-photo-view.css'

import { Roboto } from 'next/font/google'

import './globals.css'

import { ModalProvider } from '@/components/provaiders/modal-provider'
import { Toaster } from '@/components/ui/toaster'

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
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	)
}
