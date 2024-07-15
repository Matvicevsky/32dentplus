export type DoctorBuilderType = {
	id: string
	data: {
		name: string
		city: string
		image: string
		type: string
		category: string
		experience: number
		training?: { item: string }[]
		education?: { item: string }[]
		services?: { item: string }[]
		certificates?: { item: string }[]
	}
}

export type DoctorType = {
	id: string
	name: string
	city: string
	image: string
	type: string
	category: string
	experience: number
	training: string[] | null
	education: string[] | null
	services: string[] | null
	certificates: string[] | null
}
