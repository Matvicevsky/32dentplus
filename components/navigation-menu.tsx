'use client'

import { PhoneIcon } from 'lucide-react'
import Link from 'next/link'

interface NavigationMenuProps {
	items: {
		title: string
		href: string
	}[]
	addressList: {
		address: {
			title: string
			href: string
		}
		workTime: string
		phone: {
			title: string
			value: string
		}
	}[]
}

export const NavMenu = ({ items, addressList }: NavigationMenuProps) => {
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
				{addressList.map(item => (
					<div
						key={item.address.title}
						className='flex gap-2.5 xl:gap-4 2xl:gap-[2vw] justify-between'
					>
						<Link
							href={item.address.href}
							className='relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full text-[.9vw]'
							target='_blank'
						>
							{item.address.title}
						</Link>

						<div className='text-[.9vw]'>{item.workTime}</div>
						<Link
							href={item.phone.value}
							className='whitespace-nowrap flex items-center'
						>
							<PhoneIcon size={16} className='mr-2' />
							{item.phone.title}
						</Link>
					</div>
				))}
			</div>
		</nav>
	)
}
