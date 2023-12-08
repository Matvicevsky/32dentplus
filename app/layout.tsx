import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: '32 Dent plus home page',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	)
}
