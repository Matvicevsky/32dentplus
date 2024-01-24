import Image from 'next/image'
import { SectionWrapper } from '@/components/section-wrapper'
import { ABOUT_BANNER } from '@/constants/ru/home-page/about'

export const AboutBanner = () => {
	return (
		<SectionWrapper>
			<div className='flex flex-col md:flex-row w-[97%] md:w-[95%] md:gap-24'>
				<div className='hidden md:block w-1/2 relative aspect-auto'>
					<Image
						src={ABOUT_BANNER.img}
						alt='about image'
						fill
						objectFit='contain'
					/>
				</div>
				<div className='md:w-1/2'>
					<h3 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 lg:mb-8'>
						{ABOUT_BANNER.title}
					</h3>
					<div className='block md:hidden w-full relative aspect-square'>
						<Image
							src={ABOUT_BANNER.img}
							alt='about image'
							fill
							objectFit='contain'
						/>
					</div>
					<div className='w-2/3 relative h-[80px] mb-8 hidden lg:block'>
						<Image
							src={ABOUT_BANNER.sub_image}
							alt='sub about image'
							fill
							objectFit='contain'
						/>
					</div>
					<p className='mb-2 text-base lg:text-xl'>{ABOUT_BANNER.sub_title}</p>
					{ABOUT_BANNER.text.split('\n').map((item, index) => (
						<p key={index} className='mb-1 text-sm md:text-base'>
							{item}
						</p>
					))}
				</div>
			</div>
		</SectionWrapper>
	)
}
