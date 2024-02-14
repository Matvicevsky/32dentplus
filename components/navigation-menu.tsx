'use client'

import { useAddressStore } from '@/store/use-address-store'
import Link from 'next/link'
import { CitySelector } from './city-selector'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuTrigger,
} from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { FaRegClock } from 'react-icons/fa'
import { SocialList } from './socilas-list'

interface NavigationMenuProps {
	items: {
		title: string
		href: string
	}[]
}

export const NavMenu = ({ items }: NavigationMenuProps) => {
	const { selectedAddress } = useAddressStore()

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
			<div className='ml-auto'>
				<div className='flex flex-col'>
					<NavigationMenu>
						<NavigationMenuItem className='list-none'>
							<NavigationMenuTrigger
								className={cn(
									'text-primary bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary/60 hover:bg-transparent focus:bg-transparent hover:text-primary/60 focus:text-primary/60 font-normal '
								)}
							>
								<div>{selectedAddress.phone.title}</div>
							</NavigationMenuTrigger>
							<NavigationMenuContent asChild>
								<div className='py-8 px-6 flex flex-col items-end gap-y-4 min-w-64'>
									<p className='font-normal'>{selectedAddress.city}</p>
									<div>
										{selectedAddress.contacts.map(item => (
											<Link
												key={item.value}
												href={item.value}
												className='block mb-2 hover:scale-105 text-nowrap relative transition-all duration-500 after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-secondary after:absolute after:bottom-0 after:left-0 hover:after:w-full text-[.9vw]'
												target='_blank'
											>
												<div className='flex items-center justify-end w-auto'>
													<item.icon size={16} className='mr-2' />
													{item.text}
												</div>
											</Link>
										))}
									</div>
									<ul className='text-[.9vw]'>
										{selectedAddress?.workTime.map((item, index) => (
											<li key={index} className='flex items-center'>
												<FaRegClock size={16} className='mr-2' />
												<p>
													{item.days} {item.time}
												</p>
											</li>
										))}
									</ul>
									<div className='text-end'>
										<Link
											href={selectedAddress?.address.href || ''}
											className='block cursor-pointer transition-all duration-500 hover:scale-105'
											target='_blank'
										>
											{selectedAddress?.address.title}
										</Link>
									</div>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenu>
					<SocialList />
				</div>
			</div>
			<CitySelector />
		</nav>
	)
}
