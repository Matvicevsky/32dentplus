import { Metadata } from 'next'

import DoctorsPage from './_components/doctors-page'
import { getDoctors } from '@/lib/get-doctors-data'

export const metadata: Metadata = {
	title: 'Специалисты стоматологии',
	description:
		'Врачи стоматологии 32Дент, здесь вы можете найти врача, а также узнать его специализацию и квалификацию. ',
	icons: '/favicon.ico',
}

const Page = async () => {
	const doctors = await getDoctors()

	return <DoctorsPage employees={doctors} />
}

export default Page
