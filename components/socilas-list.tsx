'use client'

import { useAddressStore } from '@/store/use-address-store'
import Link from 'next/link'

export const SocialList = () => {
	const { selectedAddress } = useAddressStore()

	return (
		<div className='flex items-center gap-x-2 px-4 pb-2'>
			{selectedAddress.socials.map(item => (
				<Link
					key={item.value}
					href={item.value}
					className='hover:scale-125 transition duration-500'
					target='_blank'
				>
					<item.icon size={16} />
				</Link>
			))}
		</div>
	)
}
