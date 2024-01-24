import { SectionWrapper } from '@/components/section-wrapper'
import { PromotionItem } from './promotion-item'

import { PROMOTIONS } from '@/constants/ru/home-page/promotions'

export const PromotionBanner = () => {
	return (
		<SectionWrapper>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[8.2vw]'>
				<h3 className='mx-auto uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
					акции
				</h3>
				<div className='flex flex-wrap items-center md:items-stretch gap-12 md:gap-x-[14vw] md:gap-y-[6vw] lg:gap-x-[3vw] lg:gap-y-[6vw]'>
					{PROMOTIONS.map(item => (
						<PromotionItem key={item.title} promotion={item} />
					))}
				</div>
			</div>
		</SectionWrapper>
	)
}
