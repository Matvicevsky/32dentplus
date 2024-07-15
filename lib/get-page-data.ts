'use server'

import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next'
import { NavLinkType } from '@/types/header'
import { ServiceType } from '@/types/service'
import { builder } from '@builder.io/sdk'
import {
	normalizedAboutBanner,
	normalizedPromotions,
	normalizedService,
	normalizeSliderBanner,
} from './normalize'
import {
	AboutBannerType,
	SliderBannerType,
	SliderBannerBuilder,
} from '@/types/banners'
import { PromotionType } from '@/types/promotion'
import { getHeaderData } from './get-header-data'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API || '')

type PageDataType = {
	navLinks: NavLinkType[] | null
	aboutBanner: AboutBannerType | null
	sliderBanner: SliderBannerType | null
	service: ServiceType | null
	promotions: PromotionType[] | null
}
export const getPageData = async (): Promise<PageDataType> => {
	const cityCookies = getCookie('city', { cookies })
	const queryVariables = cityCookies
		? {
				data: {
					city: {
						$eq: cityCookies?.toLocaleLowerCase() || 'минск',
					},
				},
		  }
		: null
	const errorProps = {
		navLinks: [],
		aboutBanner: null,
		sliderBanner: null,
		service: null,
		promotions: null,
	}

	try {
		const headerPromise = getHeaderData()
		const navLinks = await headerPromise

		const aboutBanner = await builder.get('about-banner', {
			query: queryVariables,
		})

		const sliderBanner = await builder.get('slider-banner', {
			query: queryVariables,
		})

		const servicesBanner = await builder.get('services', {
			query: queryVariables,
		})

		const promotionData = await builder.get('promotions', {
			query: queryVariables,
		})

		return {
			navLinks: navLinks,
			aboutBanner: normalizedAboutBanner({
				data: (aboutBanner.data as AboutBannerType) || null,
				id: aboutBanner.id!,
			}),
			sliderBanner: normalizeSliderBanner({
				data: (sliderBanner as SliderBannerBuilder) || null,
				id: sliderBanner.id,
			}),
			service: normalizedService({
				data: servicesBanner ? servicesBanner : null,
			}),
			promotions: normalizedPromotions({
				data: promotionData ? promotionData.data : null,
			}),
		}
	} catch (error) {
		console.log('GET_PAGE_DATA_ERROR: ', error)
		return errorProps
	}
}
