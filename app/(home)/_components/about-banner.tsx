'use client'

import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

import SectionWrapper from '@/components/section-wrapper'
import { AboutBannerType } from '@/types/banners'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { memo } from 'react'

const AboutBanner = ({ item }: { item: AboutBannerType | null }) => {
	const { selectedCity } = useSelector((state: RootState) => state.cities)

	if (!item) {
		return null
	}

	return (
		<SectionWrapper>
			<div className='flex flex-col md:flex-row w-[97%] md:w-[95%] md:gap-24 mx-auto md:mx-0'>
				<div className='hidden md:block w-1/2 relative aspect-auto'>
					<Image
						src={item.img || '/img-placeholder.svg'}
						alt='about image'
						fill
						objectFit='contain'
					/>
					{selectedCity?.tour && (
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-150'>
							<a
								href={selectedCity?.tour || ''}
								title='open online tour'
								target='_blank'
							>
								<div className='border rounded-full p-4 relative w-20 h-20'>
									<FaPlay
										size={36}
										className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-2'
									/>
								</div>
							</a>
						</div>
					)}
				</div>
				<div className='md:w-1/2'>
					<h3 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 lg:mb-8'>
						{item.title || ''}
					</h3>
					<div className='block md:hidden w-full relative aspect-square'>
						<Image
							src={item.img || '/img-placeholder.svg'}
							alt='about image'
							fill
							objectFit='contain'
						/>
						{selectedCity?.tour && (
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-150'>
								<a
									href={selectedCity?.tour || ''}
									target='_blank'
									title='open online tour'
								>
									<div className='border rounded-full p-4 relative w-20 h-20'>
										<FaPlay
											size={36}
											className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-2'
										/>
									</div>
								</a>
							</div>
						)}
					</div>
					{item.subImage && (
						<div className='w-2/3 relative h-[80px] mb-8 hidden lg:block'>
							<Image
								src={item.subImage || '/img-placeholder.svg'}
								alt='sub about image'
								fill
								objectFit='contain'
							/>
						</div>
					)}
					<p className='mb-2 text-base lg:text-xl'>{item.subTitle || ''}</p>
					{item.text.split('\\n').map((item, index) => (
						<p key={index} className='mb-1 text-sm md:text-base'>
							{item || ''}
						</p>
					))}
				</div>
			</div>
		</SectionWrapper>
	)
}

export default memo(AboutBanner)
