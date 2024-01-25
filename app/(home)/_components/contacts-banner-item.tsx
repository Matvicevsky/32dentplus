'use client'

import { useAddressStore } from '@/store/use-address-store'
import useStore from '@/store/use-store'
import Link from 'next/link'

export const ContactsBannerItem = () => {
	const selectedAddress = useStore(
		useAddressStore,
		state => state.selectedAddress
	)

	return (
		<div>
			<ul className='mb-8'>
				{selectedAddress?.contacts.map((contact, index) => {
					return (
						<li className='flex pb-1 md:pb-4' key={index}>
							<Link
								href={contact.value}
								target='_blank'
								className='flex gap-1 relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full text-lg md:text-[1.6vw] font-normal'
							>
								<contact.icon size={24} className='mr-2' />
								{contact.text}
							</Link>
						</li>
					)
				})}
			</ul>
			<ul>
				{selectedAddress?.workTime.map((item, index) => {
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
