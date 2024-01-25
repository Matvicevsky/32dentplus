'use client'

import Link from 'next/link'
import Slider from 'react-slick'

import { EmployeeCard } from '@/components/employee-card'
import { SectionWrapper } from '@/components/section-wrapper'
import { EMPLOYEES } from '@/constants/ru/staff/employees'

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
							infinite={true}
							adaptiveHeight
							slidesToShow={3}
							slidesToScroll={3}
							responsive={[
								{
									breakpoint: 1024,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 2,
									},
								},
								{
									breakpoint: 768,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
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
