import { IconType } from 'react-icons'

import { PopularServiceCart } from './popular-service-cart'

export type ServiceCartType = {
	icon: IconType
	title: string
	description: string
	href: string
}

interface PapularServicesProps {
	title: string
	subTitle?: string
	description?: string
	carts: ServiceCartType[]
}

export const PopularServices = ({
	services,
}: {
	services: PapularServicesProps
}) => {
	const { title, subTitle, description, carts } = services
	return (
		<div className='p-4 md:px-32 md:py-24 flex flex-col items-center justify-center gap-y-6'>
			<h2 className='text-2xl md:text-6xl text-center'>{title}</h2>
			<div className='text-sm md:text-2xl text-center'>{subTitle}</div>
			<p className=' w-[60%] text-center'>{description}</p>
			<div className='flex flex-wrap items-center justify-center gap-2'>
				{carts.map(cart => (
					<PopularServiceCart cart={cart} key={cart.description} />
				))}
			</div>
		</div>
	)
}
