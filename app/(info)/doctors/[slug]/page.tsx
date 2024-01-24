import { EMPLOYEES } from '@/constants/ru/staff/employees'

export default function EmployeePage({ params }: { params: { slug: string } }) {

	const employee = EMPLOYEES.find(item => item.id === params.slug)

	return <div>Employee Page {employee?.name}</div>
}
