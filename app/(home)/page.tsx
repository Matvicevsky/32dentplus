import type { Metadata } from 'next'
import { builder } from '@builder.io/sdk'

import { ContactsBanner } from './_components/contacts-banner'
import EmployeesBanner from './_components/employees-banner'
import AboutBanner from './_components/about-banner'
import SliderBanner from './_components/slider-banner'
import ServicesBanner from './_components/services-banner'
import PromotionBanner from './_components/promotion-banner'
import { getPageData } from '@/lib/get-page-data'
import { getDoctors } from '@/lib/get-doctors-data'
builder.init(process.env.NEXT_PUBLIC_BUILDER_API || '')
builder.apiVersion = 'v3'

export const metadata: Metadata = {
	title: 'Стоматология 32Дент+',
	description:
		'Стоматология в городе Минске и Рогачеве. Широкий спектр услуг, доступные цены, лучшие врачи и современные технологии',
	icons: '/favicon.ico',
}

const HomePage = async () => {
	const { aboutBanner, sliderBanner, service, promotions } = await getPageData()

	const doctors = await getDoctors()

	return (
		<main className='flex items-center justify-center flex-col'>
			<SliderBanner slides={sliderBanner} />
			<AboutBanner item={aboutBanner} />
			<ServicesBanner service={service} />
			<PromotionBanner promotions={promotions} />
			<EmployeesBanner doctors={doctors} />
			<ContactsBanner />
		</main>
	)
}

export default HomePage
