'use client'

import Link from 'next/link'
import Slider from 'react-slick'
import { cn } from '@/lib/utils'

import { EmployeeCard } from '@/components/employee-card'
import { EMPLOYEES } from '@/constants/ru/staff/employees'
import { SectionWrapper } from '@/components/section-wrapper'

export const EmployeesBanner = () => {
	return (
		<SectionWrapper>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[8.2vw]'>
				<h3 className='mx-auto uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
					наша команда врачей
				</h3>
				<div className='w-full flex flex-col items-end'>
					<Link
						href='/doctors'
						className='relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full md:text-[.9vw] uppercase'
					>
						Все врачи
					</Link>
					<div className='w-full relative'>
						<Slider
							arrows={false}
							infinite={false}
							adaptiveHeight
							slidesToShow={3.5}
							responsive={[
								{
									breakpoint: 1024,
									settings: {
										slidesToShow: 2.3,
									},
								},
								{
									breakpoint: 768,
									settings: {
										slidesToShow: 1.2,
									},
								},
							]}
						>
							{EMPLOYEES.map(employee => (
								<EmployeeCard employee={employee} key={employee.id} />
							))}
						</Slider>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
