import { Metadata } from 'next'

import { DoctorsPage } from './_components/doctors-page'

export const metadata: Metadata = {
	title: 'Специалисты стоматологии',
	description: '',
	icons: '/favicon.ico',
}

const Page = () => {
	return <DoctorsPage />
}

export default Page
