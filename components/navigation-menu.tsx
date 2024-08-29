'use client'

import { memo } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import { CitySelector } from './city-selector'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuTrigger,
} from './ui/navigation-menu'
import { FaRegClock } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { RootState } from '@/lib/store'
import { SocialList } from './socials-list'

interface NavigationMenuProps {
	items: {
		title: string
		href: string
	}[]
}

const NavMenu = ({ items }: NavigationMenuProps) => {
	const { selectedCity, contacts } = useSelector(
		(state: RootState) => state.cities
	)

	return (
		<nav className='hidden lg:flex items-center w-full'>
			<div className='flex items-center gap-2.5 xl:gap-4 2xl:gap-[2vw] mr-[5.36vw] text-lg lg:text-base'>
				{items.map((item) => (
					<a
						key={item.href}
						href={item.href}
						className='relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full'
					>
						{item.title || ''}
					</a>
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
								<div>{selectedCity?.phone.phone || ''}</div>
							</NavigationMenuTrigger>
							<NavigationMenuContent asChild>
								<div className='py-8 flex'>
									{contacts.map((contact) => (
										<div
											key={contact.city}
											className='min-w-52 flex flex-col justify-between px-6 gap-y-4'
										>
											<p className='font-normal text-center'>{contact.city}</p>
											<div className='items-start'>
												{contact.contacts.map((item) => {
													if (!item.isContact) {
														return null
													}
													return (
														<a
															key={item.value}
															href={item.value || ''}
															className='block mb-2 hover:scale-105 text-nowrap relative text-[.9vw]'
															target='_blank'
														>
															<div className='flex items-center justify-start transition-all duration-500 after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-secondary after:absolute after:bottom-0 after:left-0 hover:after:w-full'>
																{item.darkIcon && (
																	<Image
																		src={item.darkIcon}
																		width={16}
																		height={16}
																		alt='contact icon'
																		className='mr-2'
																	/>
																)}
																{item.phone || ''}
															</div>
														</a>
													)
												})}
											</div>
											<ul className='text-[.9vw] '>
												{contact?.workTime.map((item, index) => (
													<li key={index} className='flex items-center'>
														<FaRegClock size={16} className='mr-2' />
														<p>
															{item.days || ''} {item.time || ''}
														</p>
													</li>
												))}
											</ul>
											<div className='items-end'>
												<a
													href={contact?.address.href || ''}
													className='block cursor-pointer transition-all duration-500 hover:scale-105'
													target='_blank'
												>
													{contact?.address.title || ''}
												</a>
											</div>
										</div>
									))}
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

export default memo(NavMenu)
