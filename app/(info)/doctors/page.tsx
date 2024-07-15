import { Metadata } from 'next'

import DoctorsPage from './_components/doctors-page'
import { getDoctors } from '@/lib/get-doctors-data'

export const metadata: Metadata = {
	title: 'Специалисты стоматологии',
	description: '',
	icons: '/favicon.ico',
}

const Page = async () => {
	const doctors = await getDoctors()

	return <DoctorsPage employees={doctors} />
}

export default Page
