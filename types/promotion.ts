export type PromotionBuilderType = {
	promotions: {
		title: string
		image: string
		condition: string
		services: {
			text: string
		}[]
	}[]
}

export type PromotionType = {
	title: string
	image: string
	condition: string
	services: {
		text: string
	}[]
}
