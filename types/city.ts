export type CityBuilderType = {
	id: string
	data: {
		city: string
		icon: string
		logo: string
		tour?: string
		coordinates: {
			lng: number
			lat: number
		}
		address: {
			title: string
			href: string
		}
		workTime: {
			days: string
			time: string
		}[]
		phone: {
			title: string
			phone: string
			value: string
		}
		contacts: {
			title: string
			phone: string
			value: string
			lightIcon: string
			darkIcon: string
			isSocial: boolean
			isContact: boolean
		}[]
	}
}

export type CityType = {
	id: string
	city: string
	icon: string
	logo: string
	tour?: string
	coordinates: {
		lng: number
		lat: number
	}
	address: {
		title: string
		href: string
	}
	workTime: {
		days: string
		time: string
	}[]
	phone: {
		title: string
		phone: string
		value: string
	}
	contacts: {
		title: string
		phone: string
		value: string
		lightIcon: string
		darkIcon: string
		isSocial: boolean
		isContact: boolean
	}[]
}
