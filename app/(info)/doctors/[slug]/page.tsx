import { Metadata } from 'next'
import { DoctorPage } from './_components/doctor-page'
import { EMPLOYEES } from '@/constants/ru/staff/employees'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
	title: 'Текущий врач',
	description:
		'Услуги, квалификация, а также подтверждающие сертификаты курсов текущего врача.',
	icons: '/favicon.ico',
}

export default function EmployeePage({ params }: { params: { slug: string } }) {
	const employee = EMPLOYEES.find(item => item.id === params.slug)

	if (!employee) {
		redirect('/')
	}
	return <DoctorPage employee={employee} />
}
