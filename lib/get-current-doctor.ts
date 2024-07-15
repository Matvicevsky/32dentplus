import { builder } from '@builder.io/sdk'
import { normalizedDoctor } from './normalize'
import { DoctorBuilderType, DoctorType } from '@/types/doctor'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API || '')

export const getCurrentDoctor = async (
	id: string
): Promise<DoctorType | null> => {
	try {
		const response = await builder.getAll('doctors', {
			options: { noTargeting: true },
			query: {
				id: id,
			},
		})

		const normalizedResult = normalizedDoctor({
			data: response[0] as DoctorBuilderType,
		})

		return normalizedResult
	} catch (error) {
		console.error('GET_DOCTORS: ', error)
		return null
	}
}
