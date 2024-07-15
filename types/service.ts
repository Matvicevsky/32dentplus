export type ServiceBuilderType = {
	data: {
		city: string
		title: string
		subTitle: string
		info: {
			url: string
			text: string
		}
		services: {
			name: string
			description: string
			icon: string
			prices: {
				title: string
				value: string
			}[]
		}[]
	}
}

export type ServiceType = {
	city: string
	title: string
	subTitle: string
	info: {
		url: string
		text: string
	}
	services: {
		name: string
		description: string
		icon: string
		prices: {
			title: string
			value: string
		}[]
	}[]
}
