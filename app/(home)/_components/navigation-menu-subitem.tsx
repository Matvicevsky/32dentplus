import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

import { MenuItemType } from './navigation-menu'

export const NavigationMenuSubItem = ({
	item,
	onClose,
}: {
	item: MenuItemType
	onClose: (isFlag?: boolean) => void
}) => {
	const router = useRouter()
	const [isActive, setIsActive] = useState(false)

	return (
		<li
			onMouseMove={() => setIsActive(true)}
			onMouseLeave={() => {
				setIsActive(false)
			}}
			onClick={() => {
				router.push(item.href)
				onClose()
			}}
			className='flex list-none uppercase cursor-pointer text-xl relative px-4 py-1 hover:text-secondary'
		>
			<>
				{item.title}
				{item.subItems?.length &&
					(isActive ? (
						<ChevronLeft
							size={16}
							className='absolute right-2 top-1/2 -translate-y-1/2'
						/>
					) : (
						<ChevronRight
							size={16}
							className='absolute right-2 top-1/2 -translate-y-1/2'
						/>
					))}
			</>
			{item.subItems?.length && (
				<ul
					className={cn(
						'absolute left-full bg-white z-50 rounded-2xl flex flex-col w-52 p-4 text-black',
						{ hidden: !isActive },
						{ block: isActive }
					)}
				>
					{item.subItems.map(sub => (
						<li
							key={sub.href}
							className='py-1 hover:text-secondary'
							onClick={() => router.push(sub.href)}
						>
							{sub.title}
						</li>
					))}
				</ul>
			)}
		</li>
	)
}
