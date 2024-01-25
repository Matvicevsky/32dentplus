'use client'

import { useAddressStore } from '@/store/use-address-store'
import useStore from '@/store/use-store'
import { PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import { CitySelector } from './city-selector'

interface NavigationMenuProps {
	items: {
		title: string
		href: string
	}[]
}

export const NavMenu = ({ items }: NavigationMenuProps) => {
	const selectedAddress = useStore(
		useAddressStore,
		state => state.selectedAddress
	)

	return (
		<nav className='hidden lg:flex items-center w-full'>
			<div className='flex items-center gap-2.5 xl:gap-4 2xl:gap-[2vw] mr-[5.36vw] text-lg lg:text-base'>
				{items.map(item => (
					<Link
						key={item.href}
						href={item.href}
						className='relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full'
					>
						{item.title}
					</Link>
				))}
			</div>
			<div className='flex flex-col w-full'>
				<div
					key={selectedAddress?.address.title}
					className='flex gap-2.5 xl:gap-4 2xl:gap-[2vw] justify-between items-center'
				>
					<Link
						href={selectedAddress?.address.href || ''}
						className='relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full text-[.9vw]'
						target='_blank'
					>
						{selectedAddress?.address.title}
					</Link>

					<div className='text-[.9vw]'>
						{selectedAddress?.workTime.map((item, index) => (
							<p key={index}>
								{item.days} {item.time}
							</p>
						))}
					</div>
					<Link
						href={selectedAddress?.phone.value || ''}
						className='whitespace-nowrap flex items-center'
					>
						<PhoneIcon size={16} className='mr-2' />
						{selectedAddress?.phone.title}
					</Link>
				</div>
			</div>
			<CitySelector />
		</nav>
	)
}
