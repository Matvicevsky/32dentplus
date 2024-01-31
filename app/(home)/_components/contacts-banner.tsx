'use client'

import dynamic from 'next/dynamic'
import { SectionWrapper } from '@/components/section-wrapper'
import { ContactsBannerItem } from './contacts-banner-item'

const DynamicMap = dynamic(() => import('./map'), { ssr: false })

export const ContactsBanner = () => {
	return (
		<SectionWrapper id='clinics'>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[8.2vw]'>
				<div className='flex w-full flex-wrap gap-4'>
					<div className='w-full md:w-1/2 h-96'>
						<DynamicMap />
					</div>
					<div className='flex flex-col px-4 md:px-8 md:ml-[4vw]'>
						<ContactsBannerItem />
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
