'use client'

import { memo, useMemo, useState } from 'react'
import EmployeeCard from '@/components/employee-card'
import { SelectorPanel } from './selector-panel'
import Breadcrumbs, { BreadcrumbItem } from '@/components/breadcrumb'
import { DoctorType } from '@/types/doctor'

const DoctorsPage = ({ employees }: { employees: DoctorType[] }) => {
	const [sort, setSort] = useState({ type: 'все врачи', city: 'все' })

	const handlerSort = ({ city, type }: { city: string; type: string }) => {
		setSort({ type, city })
	}

	const filerEmployees = useMemo(() => {
		return employees.filter(employee => {
			if (
				(sort.city === 'все' || sort.city === '') &&
				sort.type === 'все врачи'
			) {
				return employee
			}

			if (
				(sort.city === 'все' || sort.city === '') &&
				sort.type !== 'все врачи'
			) {
				return (
					employee.type.toLocaleLowerCase() === sort.type.toLocaleLowerCase()
				)
			}

			if (
				sort.city !== 'все' &&
				sort.city !== '' &&
				sort.type === 'все врачи'
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
	}, [sort, employees])

	const doctorsCategories = useMemo(() => {
		const set = new Set(employees.map(doctor => doctor.type))

		return ['все врачи', ...Array.from(set)]
	}, [employees])

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
				<SelectorPanel
					handlerSelect={handlerSort}
					categories={doctorsCategories}
				/>
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

export default memo(DoctorsPage)
