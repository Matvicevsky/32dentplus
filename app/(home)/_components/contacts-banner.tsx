'use client'

import { SectionWrapper } from '@/components/section-wrapper'
import { useAddressStore } from '@/store/use-address-store'
import dynamic from 'next/dynamic'
import { ContactsBannerItem } from './contacts-banner-item'

const Map = dynamic(() => import('./map'), { ssr: false })

export const ContactsBanner = () => {
	const { selectedAddress } = useAddressStore()
	return (
		<SectionWrapper id='clinics'>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[8.2vw]'>
				<div className='flex w-full flex-wrap gap-4'>
					<div className='w-full md:w-1/2 h-96'>
						<Map
							coordinates={{
								lat: selectedAddress.coordinates.lat,
								lng: selectedAddress.coordinates.lng,
							}}
						/>
					</div>
					<div className='flex flex-col px-4 md:px-8 md:ml-[4vw]'>
						<ContactsBannerItem />
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
