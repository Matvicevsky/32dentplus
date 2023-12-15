'use client'

import { NavigationMenuItem } from './navigation-menu-item'

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

export const NavMenu = ({ items }: NavigationMenuProps) => {
	return (
		<nav>
			<ul className='flex'>
				{items.map(item => (
					<NavigationMenuItem item={item} key={item.href} />
				))}
			</ul>
		</nav>
	)
}
