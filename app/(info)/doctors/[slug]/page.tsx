import { Metadata, ResolvingMetadata } from 'next'
import DoctorPage from './_components/doctor-page'
import { redirect } from 'next/navigation'
import { getCurrentDoctor } from '@/lib/get-current-doctor'

type Props = {
	params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = params.id

	const doctor = await getCurrentDoctor(id)

	return {
		title: `${doctor?.type} ${doctor?.name}`,
		description: `${doctor?.type}, ${doctor?.category} категория, со стажем работы ${doctor?.experience}`,
		icons: '/favicon.ico',
	}
}

export default async function EmployeePage({
	params,
}: {
	params: { slug: string }
}) {
	const employee = await getCurrentDoctor(params.slug)

	if (!employee) {
		redirect('/')
	}
	return <DoctorPage employee={employee} />
}
