'use client'

import { EMPLOYEES } from '@/constants/ru/staff/employees'
import { useMemo, useState } from 'react'
import { EmployeeCard } from '../../../components/employee-card'
import { SelectorPanel } from './_components/selector-panel'

const DoctorsPage = () => {
	const [sort, setSort] = useState({ type: 'Все врачи', city: 'все' })

	const handlerSort = ({ city, type }: { city: string; type: string }) => {
		setSort({ type, city })
	}

	const filerEmployees = useMemo(() => {
		return EMPLOYEES.filter(employee => {
			if (sort.city === 'все' && sort.type === 'Все врачи') {
				return employee
			}

			if (sort.city === 'все' && sort.type !== 'Все врачи') {
				return (
					employee.type.toLocaleLowerCase() === sort.type.toLocaleLowerCase()
				)
			}

			if (sort.city !== 'все' && sort.type === 'Все врачи') {
				return (
					employee.city.toLocaleLowerCase() === sort.city.toLocaleLowerCase()
				)
			}

			return (
				employee.type.toLocaleLowerCase() === sort.type.toLocaleLowerCase() &&
				employee.city.toLocaleLowerCase() === sort.city.toLocaleLowerCase()
			)
		})
	}, [sort])

	return (
		<div className='p-4 md:px-32 md:py-24 flex flex-col space-y-24 h-full'>
			<h1 className='text-6xl font-bold'>Врачи и персонал</h1>
			<SelectorPanel handlerSelect={handlerSort} />
			<div className='flex flex-wrap gap-8'>
				{filerEmployees.map(employee => (
					<EmployeeCard key={employee.id} employee={employee} />
				))}
			</div>
		</div>
	)
}

export default DoctorsPage
