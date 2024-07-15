import {
	AboutBannerType,
	AboutBannerBuilderType,
	SliderBannerType,
	SliderBannerBuilder,
} from '@/types/banners'
import { CityType, CityBuilderType } from '@/types/city'
import { DoctorBuilderType, DoctorType } from '@/types/doctor'
import { BuilderNavLinkType, NavLinkType } from '@/types/header'
import { PromotionBuilderType, PromotionType } from '@/types/promotion'
import { ServiceBuilderType, ServiceType } from '@/types/service'

export const normalizeNavLink = (data: BuilderNavLinkType): NavLinkType[] => {
	return data.links.map(i => i)
}

export const normalizedCity = ({
	data,
}: {
	data: CityBuilderType
}): CityType => {
	return {
		...data.data,
		id: data.id,
	}
}

export const normalizeSliderBanner = ({
	data,
	id,
}: {
	data: SliderBannerBuilder | null
	id: string
}): SliderBannerType | null => {
	if (!data) {
		return null
	}
	const slides = data.data.slides
	return {
		id,
		slides: slides.map(item => {
			return {
				title: item.title || '',
				subTitle: item.subTitle || '',
				image: item.image,
			}
		}),
	}
}

export const normalizedAboutBanner = ({
	data,
	id,
}: {
	data: AboutBannerBuilderType | null
	id: string
}): AboutBannerType | null => {
	if (!data) {
		return null
	}
	return {
		id,
		...data,
	}
}

export const normalizedService = ({
	data,
}: {
	data: ServiceBuilderType | null
}): ServiceType | null => {
	if (!data) {
		return null
	}
	return {
		...data.data,
	}
}

export const normalizedPromotions = ({
	data,
}: {
	data: PromotionBuilderType | null
}): PromotionType[] | null => {
	if (!data) {
		return null
	}
	return data.promotions.map(item => item)
}

export const normalizedDoctor = ({
	data,
}: {
	data: DoctorBuilderType
}): DoctorType => {
	return {
		...data.data,
		id: data.id,
		education: data.data.education
			? data.data.education.map(i => i.item)
			: null,
		certificates: data.data.certificates
			? data.data.certificates.map(i => i.item)
			: null,
		training: data.data.training ? data.data.training.map(i => i.item) : null,
		services: data.data.services ? data.data.services.map(i => i.item) : null,
	}
}
