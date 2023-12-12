import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Footer } from './_components/footer'
import { Navbar } from './_components/navbar'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='bg-primary'>
			<Navbar />
			<main className='pb-20 bg-primary'>{children}</main>
			<Footer />
		</div>
	)
}
