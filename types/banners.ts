export type SliderBannerBuilder = {
	data: {
		slides: {
			title: string
			subTitle: string
			image: string
		}[]
		city: string
	}
}

export type SliderBannerType = {
	id: string
	slides: {
		title: string
		subTitle: string
		image: string
	}[]
}

export type AboutBannerBuilderType = {
	city: string
	title: string
	img: string
	subImage?: string
	subTitle: string
	text: string
}

export type AboutBannerType = {
	id: string
	title: string
	city: string
	img: string
	subImage?: string
	subTitle: string
	text: string
}
