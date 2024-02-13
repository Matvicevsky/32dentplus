'use client'

import Image from 'next/image'
import { SectionWrapper } from '@/components/section-wrapper'
import { ABOUT_BANNER } from '@/constants/ru/home-page/about'
import { useAddressStore } from '@/store/use-address-store'
import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'

export const AboutBanner = () => {
	const { selectedAddress } = useAddressStore()

	const locationBanner = ABOUT_BANNER.find(
		item => item.city === selectedAddress.city.toLowerCase()
	)!

	return (
		<SectionWrapper>
			<div className='flex flex-col md:flex-row w-[97%] md:w-[95%] md:gap-24 mx-auto md:mx-0'>
				<div className='hidden md:block w-1/2 relative aspect-auto'>
					<Image
						src={locationBanner.img}
						alt='about image'
						fill
						objectFit='contain'
					/>
					{selectedAddress.tour && (
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-150'>
							<Link href={selectedAddress.tour} target='_blank'>
								<div className='border rounded-full p-4 relative w-20 h-20'>
									<FaPlay
										size={36}
										className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-2'
									/>
								</div>
							</Link>
						</div>
					)}
				</div>
				<div className='md:w-1/2'>
					<h3 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 lg:mb-8'>
						{locationBanner.title}
					</h3>
					<div className='block md:hidden w-full relative aspect-square'>
						<Image
							src={locationBanner.img}
							alt='about image'
							fill
							objectFit='contain'
						/>
						{selectedAddress.tour && (
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-150'>
								<Link href={selectedAddress.tour} target='_blank'>
									<div className='border rounded-full p-4 relative w-20 h-20'>
										<FaPlay
											size={36}
											className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-2'
										/>
									</div>
								</Link>
							</div>
						)}
					</div>
					{locationBanner.sub_image && (
						<div className='w-2/3 relative h-[80px] mb-8 hidden lg:block'>
							<Image
								src={locationBanner.sub_image}
								alt='sub about image'
								fill
								objectFit='contain'
							/>
						</div>
					)}
					<p className='mb-2 text-base lg:text-xl'>
						{locationBanner.sub_title}
					</p>
					{locationBanner.text.split('\n').map((item, index) => (
						<p key={index} className='mb-1 text-sm md:text-base'>
							{item}
						</p>
					))}
				</div>
			</div>
		</SectionWrapper>
	)
}
