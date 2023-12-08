'use client'

import Link from 'next/link'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export type MenuSubItemType = {
	title: string
	href: string
}

export type MenuItemType = {
	title: string
	href: string
	subItems?: MenuSubItemType[]
}

interface NavigationMenuProps {
	items: {
		title: string
		href: string
		subItems?: MenuItemType[]
	}[]
}

const SubMenuItem = ({
	subItem,
	children,
}: {
	subItem: MenuSubItemType
	children?: React.ReactNode
}) => {
	return <li className='px-4 py-2'>{children}</li>
}

const SubMenuItems = ({ subItems }: { subItems?: MenuItemType[] }) => {
	if (!subItems) {
		return null
	}

	return subItems.map(sub => <></>)
}

export const NavMenu = ({ items }: NavigationMenuProps) => {
	return (
		<NavigationMenu className='border-none'>
			<NavigationMenuList className='flex items-center justify-center gap-x-2'>
				{items.map(item => (
					<NavigationMenuItem
						key={item.href}
						className=' hover:border-secondary rounded-none hover:cursor-pointer py-4 px-2 hover:border-b-2  hover:py-3.5'
					>
						{item.subItems ? (
							<NavigationMenuTrigger className='data-[state=open]:bg-white rounded-none data-[active]:bg-white hover:bg-white transition-none h-10 font-normal text-base relative'>
								<Link href={item.href}>{item.title}</Link>
							</NavigationMenuTrigger>
						) : (
							<Link
								className='inline-block h-10 py-2 font-normal'
								href={item.href}
							>
								{item.title}
							</Link>
						)}
						<NavigationMenuContent className='absolute left-full'>
							<ul>
								{item.subItems &&
									item.subItems.map(subItem => {
										if (!subItem.subItems) {
											return (
												<li key={subItem.href}>
													<NavigationMenuLink asChild>
														<Link href={subItem.href}>{subItem.title}</Link>
													</NavigationMenuLink>
												</li>
											)
										}
										return (
											<li key={subItem.href}>
												<NavigationMenuList>
													<NavigationMenuList>
														<ul>
															{subItem.subItems.map(sub => (
																<li key={sub.href}>
																	<NavigationMenuItem>
																		<NavigationMenuTrigger></NavigationMenuTrigger>
																	</NavigationMenuItem>
																</li>
															))}
														</ul>
													</NavigationMenuList>
												</NavigationMenuList>
											</li>
										)
									})}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
