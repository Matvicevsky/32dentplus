import { builder } from '@builder.io/sdk'
import { normalizedCity } from './normalize'
import { CityBuilderType, CityType } from '@/types/city'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API || '')

export const getCities = async (): Promise<CityType[] | null> => {
	try {
		const response = await builder.getAll('cityes', {
			options: { noTargeting: true },
		})

		if (!response.length) {
			return null
		}

		return response.map(item =>
			normalizedCity({ data: item as CityBuilderType })
		)
	} catch (error) {
		console.error('GET_CITIES: ', error)
		return null
	}
}
