'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { ChevronLeft, ChevronRight, User } from 'lucide-react'
import Link from 'next/link'
import Slider, { InnerSlider as SliderType } from 'react-slick'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export type EmployeeType = {
	name: string
	image: string
}

interface EmployeesBannerProps {
	title: string
	subTitle: string
	button: string
	employees: any[]
}

interface ArrowProps {
	to: boolean
	onClick: () => void
}

const CustomArrow = ({ onClick, to }: ArrowProps) => {
	return (
		<div
			className={cn(
				'text-secondary hover:text-white cursor-pointer transition absolute top-1/2 right-0 translate-y-1/2 ',
				{ 'right-0 ': to },
				{ 'left-0': !to }
			)}
			onClick={onClick}
		>
			{to ? <ChevronRight size={36} /> : <ChevronLeft size={36} />}
		</div>
	)
}

export const EmployeesBanner = ({ props }: { props: EmployeesBannerProps }) => {
	const { employees, subTitle, title, button } = props

	const ref = useRef<Slider | null>(null)

	const handleNext = () => {
		ref.current?.slickNext()
	}

	const handlePrev = () => {
		ref.current?.slickPrev()
	}

	return (
		<div className='w-full p-4 md:px-32 md:py-24 flex flex-col items-center justify-center gap-y-6'>
			<h2 className='text-2xl md:text-6xl text-center'>{title}</h2>
			<p className='text-sm md:text-2xl text-center max-w-[60%]'>{subTitle}</p>
			<div className='w-full flex flex-col items-end'>
				<Link
					href='/doctors'
					className='uppercase text-sm md:text-base flex items-center justify-center hover:underline hover:text-secondary transition gap-x-2 mr-10'
				>
					Lorem, ipsum.
					<ChevronRight size={18} />
				</Link>
				<Slider
					ref={ref}
					arrows={true}
					// centerPadding='20'
					infinite={true}
					slidesToShow={2}
					slidesToScroll={2}
					className='w-full gap-2 h-[296px] px-8'
					nextArrow={<CustomArrow onClick={() => handleNext()} to />}
					prevArrow={<CustomArrow onClick={() => handlePrev()} to={false} />}
				>
					{employees.map(employee => (
						<div className='w-full min-h-[296px] px-3 py-4' key={employee.name}>
							<div className=' h-full flex p-8 bg-white rounded-md'>
								<div className='flex flex-col w-2/3 space-y-8 justify-center'>
									<p className='text-lg font-bold text-secondary'>
										{employee.name}
									</p>
									<p>{employee.description}</p>
									<div>
										<Button size='lg'>
											<Link href={`/doctors/${employee.name}`}>{button}</Link>
										</Button>
									</div>
								</div>
								<div className='w-1/3'>
									<div>
										<User size={200} height={296} />
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}
