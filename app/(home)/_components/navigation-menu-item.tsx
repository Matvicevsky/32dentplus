import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/lib/utils'

import { MenuItemType } from './navigation-menu'
import { NavigationMenuSubItem } from './navigation-menu-subitem'

interface NavigationMenuItemProps {
	title: string
	href: string
	subItems?: MenuItemType[] | undefined
}

export const NavigationMenuItem = ({
	item,
}: {
	item: NavigationMenuItemProps
}) => {
	const [isActive, setIsActive] = useState(false)

	const onToggle = (isOpen?: boolean) => {
		if (isOpen) {
			setIsActive(true)
			return
		}
		setIsActive(x => !x)
	}

	return (
		<li className='flex list-none uppercase cursor-pointer text-xl relative'>
			<Link
				onMouseMove={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
				href={item.href}
				className='w-full px-8 py-4 border-b-2 border-transparent transition-all  hover:border-b-2 hover:border-secondary hover:text-secondary'
			>
				{item.title}
				{item.subItems?.length &&
					(isActive ? (
						<ChevronDown
							size={16}
							className='absolute right-2 top-1/2 -translate-y-1/2'
						/>
					) : (
						<ChevronUp
							size={16}
							className='absolute right-2 top-1/2 -translate-y-1/2'
						/>
					))}
			</Link>
			{item.subItems?.length && (
				<ul
					onMouseEnter={() => onToggle(true)}
					onMouseLeave={() => setIsActive(false)}
					className={cn(
						'absolute top-full bg-white z-50 rounded-2xl flex flex-col w-52',
						{ hidden: !isActive },
						{ block: isActive }
					)}
				>
					{item.subItems.map(sub => {
						return (
							<NavigationMenuSubItem
								onClose={onToggle}
								item={sub}
								key={sub.href}
							/>
						)
					})}
				</ul>
			)}
		</li>
	)
}
