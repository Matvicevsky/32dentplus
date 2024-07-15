import { builder } from '@builder.io/sdk'
import { normalizedDoctor } from './normalize'
import { DoctorBuilderType, DoctorType } from '@/types/doctor'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API || '')

export const getDoctors = async (city?: string): Promise<DoctorType[]> => {
	try {
		const queryVariables = city
			? {
					data: {
						city: {
							$eq: city || 'минск',
						},
					},
			  }
			: null

		const response = await builder.getAll('doctors', {
			options: { noTargeting: true },
			query: queryVariables,
		})

		const normalizedResult = response.map(item =>
			normalizedDoctor({ data: item as DoctorBuilderType })
		)

		return normalizedResult
	} catch (error) {
		console.error('GET_DOCTORS: ', error)
		return []
	}
}
