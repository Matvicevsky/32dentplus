import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function InfoLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <main>{children}</main>
}
