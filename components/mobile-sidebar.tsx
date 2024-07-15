'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'

import { Button } from '@/components/ui/button'
import { RootState } from '@/lib/store'
import { CitySelector } from './city-selector'
import { SocialList } from './socials-list'
import { Sheet, SheetContent } from './ui/sheet'

interface MobileSidebarProps {
	items: {
		title: string
		href: string
	}[]
}

const MobileSidebar = ({ items }: MobileSidebarProps) => {
	const pathname = usePathname()
	const { selectedCity } = useSelector((state: RootState) => state.cities)

	const onOpen = useMobileSidebar(state => state.onOpen)
	const onClose = useMobileSidebar(state => state.onClose)
	const isOpen = useMobileSidebar(state => state.isOpen)

	useEffect(() => {
		onClose()
	}, [pathname, onClose])

	return (
		<div className='flex ml-auto lg:hidden'>
			<CitySelector />
			<Button onClick={onOpen} className='mr-2' variant='ghost' size='sm'>
				<Menu />
			</Button>

			<Sheet open={isOpen} onOpenChange={onClose}>
				<SheetContent
					side='right'
					className='bg-[#1c1c1d] !w-full !max-w-none border-none z-[5000]'
				>
					<nav className='flex flex-col gap-y-12 items-center'>
						<Image
							src={selectedCity?.logo || '/img-placeholder.svg'}
							alt='logo'
							width={170}
							height={70}
						/>
						<div className='flex flex-col items-center gap-2.5'>
							{items.map(item => (
								<a key={item.href} href={item.href} onClick={onClose}>
									{item.title}
								</a>
							))}
						</div>
						<div className='flex flex-col items-center gap-y-4'>
							<div className='flex flex-col items-center gap-y-1'>
								<a
									href={selectedCity?.phone.value || ''}
									onClick={onClose}
									className='w-full text-start'
								>
									{selectedCity?.phone.phone || ''}
								</a>
								<div className='w-full text-start'>
									{selectedCity?.workTime.map((item, index) => (
										<p key={index}>
											{item.days} {item.time}
										</p>
									))}
								</div>
								<a
									href={selectedCity?.address.href || ''}
									onClick={onClose}
									target='_blank'
								>
									{selectedCity?.address.title || ''}
								</a>
								<div className='mt-4'>
									<SocialList />
								</div>
							</div>
						</div>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	)
}

export default memo(MobileSidebar)
