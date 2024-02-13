'use client'

import { EMPLOYEES } from '@/constants/ru/staff/employees'
import { useMemo, useState } from 'react'
import { EmployeeCard } from '../../../../components/employee-card'
import { SelectorPanel } from './selector-panel'
import Breadcrumbs, { BreadcrumbItem } from '@/components/breadcrumb'

export const DoctorsPage = () => {
	const [sort, setSort] = useState({ type: 'Все врачи', city: 'все' })

	const handlerSort = ({ city, type }: { city: string; type: string }) => {
		setSort({ type, city })
	}

	const filerEmployees = useMemo(() => {
		return EMPLOYEES.filter(employee => {
			if (
				(sort.city === 'все' || sort.city === '') &&
				sort.type === 'Все врачи'
			) {
				return employee
			}

			if (
				(sort.city === 'все' || sort.city === '') &&
				sort.type !== 'Все врачи'
			) {
				return (
					employee.type.toLocaleLowerCase() === sort.type.toLocaleLowerCase()
				)
			}

			if (
				sort.city !== 'все' &&
				sort.city !== '' &&
				sort.type === 'Все врачи'
			) {
				return employee.city
					.toLocaleLowerCase()
					.includes(sort.city.toLocaleLowerCase())
			}

			return (
				employee.type.toLocaleLowerCase() === sort.type.toLocaleLowerCase() &&
				employee.city
					.toLocaleLowerCase()
					.includes(sort.city.toLocaleLowerCase())
			)
		})
	}, [sort])

	const items: BreadcrumbItem[] = [
		{ link: '/', text: 'Главная' },
		{ text: 'Доктора', link: null },
	]

	return (
		<section className='pt-14 lg:pt-[5vw] mx-auto w-full'>
			<div className='w-[97%] md:w-[95%] mx-auto'>
				<Breadcrumbs items={items} />
			</div>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[7vw]'>
				<div className='mx-auto'>
					<h3 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
						Врачи и персонал
					</h3>
				</div>
				<SelectorPanel handlerSelect={handlerSort} />
				<div className='-mt-20 flex flex-wrap justify-center md:justify-start items-center md:items-stretch gap-12 sm:gap-x-[2vw] sm:gap-y-[2vw]'>
					{filerEmployees.map(employee => (
						<div
							key={employee.id}
							className='flex pl-6 sm:pl-0 md:shrink md:grow-0 sm:basis-[42%] md:basis-[31%]'
						>
							<EmployeeCard employee={employee} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
