import { SliderBanner } from './_components/slider-banner'
import { PopularServices } from './_components/popular-services'

import { POPULAR_SERVICES } from '@/constants/home-page/languages/en-us'

const HomePage = () => {
	return (
		<div className='flex items-center justify-center flex-col'>
			<SliderBanner />
			<PopularServices services={POPULAR_SERVICES} />
		</div>
	)
}

export default HomePage
