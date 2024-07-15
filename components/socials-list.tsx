'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

export const SocialList = () => {
	const { selectedCity } = useSelector((state: RootState) => state.cities)

	return (
		<div className='flex items-center gap-x-2 px-4 pb-2'>
			{selectedCity?.contacts.map((item, index) => {
				if (!item.isSocial) {
					return null
				}
				return (
					<Link
						key={index}
						href={item.value}
						className='hover:scale-125 transition duration-500'
						target='_blank'
					>
						<Image
							src={item.lightIcon}
							alt='social icon'
							width={20}
							height={20}
						/>
					</Link>
				)
			})}
		</div>
	)
}
