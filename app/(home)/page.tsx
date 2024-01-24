import { AboutBanner } from './_components/about-banner'
import { ContactsBanner } from './_components/contacts-banner'
import { EmployeesBanner } from './_components/employees-banner'
import { SliderBanner } from './_components/slider-banner'
import { ServicesBanner } from './_components/services-banner'
import { PromotionBanner } from './_components/promotion-banner'

const HomePage = () => {
	return (
		<main className='flex items-center justify-center flex-col'>
			<SliderBanner />
			<AboutBanner />
			<ServicesBanner />
			<PromotionBanner />
			<EmployeesBanner />
			{/* <ContactsBanner /> */}
		</main>
	)
}

export default HomePage
