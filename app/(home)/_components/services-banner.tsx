'use client'
import { SERVICES } from '@/constants/ru/services/services'
import { ServiceCart } from './service-cart'
import { SectionWrapper } from '@/components/section-wrapper'
import { useAddressStore } from '@/store/use-address-store'
import { useMemo } from 'react'

export const ServicesBanner = () => {
	const { selectedAddress } = useAddressStore()

	const filteredServices = useMemo(
		() =>
			SERVICES.services.filter(
				item => item.city === selectedAddress.city.toLowerCase()
			),
		[selectedAddress]
	)
	return (
		<SectionWrapper id='services'>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[8.2vw]'>
				<div className='mx-auto'>
					<h3 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
						{SERVICES.title}
					</h3>
					<p className='md:text-lg'>{SERVICES.subTitle}</p>
				</div>
				<div className='flex flex-wrap items-center md:items-stretch gap-12 md:gap-x-[14vw] md:gap-y-[6vw] lg:gap-x-[3vw] lg:gap-y-[6vw]'>
					{filteredServices.map(item => (
						<ServiceCart key={item.name} service={item} />
					))}
				</div>
				<div className='md:w-2/3 -mt-4 md:-mt-[4vw]'>
					{/* <p className='font-normal md:text-lg'>
						Полный прайс по{' '}
						<Link
							className='underline after:content-[""]'
							href={SERVICES.info.url}
						>
							ссылке
						</Link>
						*
					</p> */}
					<span className='text-sm before:content-["*"] before:pr-2'>
						{SERVICES.info.text}
					</span>
				</div>
			</div>
		</SectionWrapper>
	)
}
