import { SliderBanner } from './_components/slider-banner'
import { PopularServices } from './_components/popular-services'
import { EmployeesBanner } from './_components/employees-banner'

import {
	POPULAR_SERVICES,
	EMPLOYEES_BANNER,
} from '@/constants/home-page/languages/en-us'

const HomePage = () => {
	return (
		<div className='flex items-center justify-center flex-col'>
			<SliderBanner />
			<PopularServices services={POPULAR_SERVICES} />
			<EmployeesBanner props={EMPLOYEES_BANNER} />
		</div>
	)
}

export default HomePage
