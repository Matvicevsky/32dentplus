'use client'

import { RootState } from '@/lib/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'

export const ContactsBannerItem = () => {
	const { selectedCity } = useSelector((state: RootState) => state.cities)

	return (
		<div>
			<ul className='mb-8'>
				{selectedCity?.contacts.map((contact, index) => {
					if (!contact.isContact) return null
					return (
						<li className='flex pb-1 md:pb-4' key={index}>
							<a
								href={contact.value}
								target='_blank'
								className='flex gap-1 relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full text-lg md:text-[1.6vw] font-normal'
							>
								<Image
									src={contact.lightIcon}
									width={24}
									height={24}
									alt='contact icon'
									className='mr-2'
								/>
								{contact.phone}
							</a>
						</li>
					)
				})}
			</ul>
			<ul>
				{selectedCity?.workTime.map((item, index) => {
					return (
						<li className='flex text-xl pb-1 md:pb-2' key={index}>
							{item.days} {item.time}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
