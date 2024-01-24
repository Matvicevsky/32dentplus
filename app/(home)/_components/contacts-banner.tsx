'use client'

import dynamic from 'next/dynamic'
import { IconType } from 'react-icons'
import { ContactsBannerItem } from './contacts-banner-item'
import { SectionWrapper } from '@/components/section-wrapper'

const Map = dynamic(() => import('./map'), { ssr: false })

import { CONTACTS } from '@/constants/ru/home-page/contacts'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export enum ContactsType {
	tel = 'tel',
	email = 'email',
	viber = 'viber',
	tg = 'telegram',
}

enum CityType {
	minsk = 'Минск',
	rogochev = 'Рогочев',
}

interface ContactsBannerProps {
	title: string
	coordinates: {
		lng: number
		lat: number
	}
	contacts: {
		type: ContactsType
		text: string
		value: string
		icon?: IconType
	}[]
	workTime: { days: string; time: string }[]
}

export const ContactsBanner = () => {
	const contacts = CONTACTS
	const [selectedAddress, setSelectedAddress] = useState(contacts.address[0])

	const handlerSelectAddress = (city: string) => {
		const address = contacts.address.find(item => item.city === city)
		if (address) {
			setSelectedAddress(address)
		}
	}

	return (
		<SectionWrapper id='clinics'>
			<div className='w-[97%] md:w-[95%] mx-auto flex flex-col gap-16 md:gap-[8.2vw]'>
				<div className='mx-auto'>
					<h3 className='uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
						{contacts.title}
					</h3>
				</div>
				<div className='flex w-full flex-wrap gap-4'>
					<div className='w-full md:w-1/2 h-96'>
						<Map
							coordinates={{
								lat: selectedAddress.coordinates.lat,
								lng: selectedAddress.coordinates.lng,
							}}
						/>
					</div>
					<div className='flex flex-col px-4 md:px-8 md:ml-[4vw]'>
						<div className='flex'>
							{contacts.address.map(item => (
								<div
									key={item.city}
									onClick={() => handlerSelectAddress(item.city)}
									className={cn('border-b cursor-pointer mb-4 md:mb-6', {
										'border-b-0 border-x border-t rounded-t-lg':
											item.city === selectedAddress.city,
									})}
								>
									<div className='px-4 py-2 hover:scale-110 transition duration-500 md:text-lg'>
										{item.city}
									</div>
								</div>
							))}
						</div>
						<ContactsBannerItem
							contacts={selectedAddress.contacts}
							workTime={selectedAddress.workTime}
						/>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
