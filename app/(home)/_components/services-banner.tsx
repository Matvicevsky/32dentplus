'use client'

import { ServiceCart } from './service-cart'
import SectionWrapper from '@/components/section-wrapper'

import { ServiceType } from '@/types/service'
import { memo } from 'react'

const ServicesBanner = ({ service }: { service: ServiceType | null }) => {
	if (!service) {
		return null
	}
	return (
		<SectionWrapper id='services'>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[8.2vw]'>
				<div className='mx-auto'>
					<h3 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
						{service.title}
					</h3>
					<p className='md:text-lg'>{service.subTitle}</p>
				</div>
				<div className='flex flex-wrap items-center md:items-stretch gap-12 md:gap-x-[14vw] md:gap-y-[6vw] lg:gap-x-[3vw] lg:gap-y-[6vw]'>
					{service.services.map(item => (
						<ServiceCart key={item.name} service={item} />
					))}
				</div>
				<div className='md:w-2/3 -mt-4 md:-mt-[4vw]'>
					<span className='text-sm before:content-["*"] before:pr-2'>
						{service.info.text}
					</span>
				</div>
			</div>
		</SectionWrapper>
	)
}

export default memo(ServicesBanner)
