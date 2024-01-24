'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from './ui/sheet'
import Link from 'next/link'

interface MobileSidebarProps {
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

export const MobileSidebar = ({ addressList, items }: MobileSidebarProps) => {
	const pathname = usePathname()
	const [isMounted, setIsMounted] = useState(false)

	const onOpen = useMobileSidebar(state => state.onOpen)
	const onClose = useMobileSidebar(state => state.onClose)
	const isOpen = useMobileSidebar(state => state.isOpen)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		onClose()
	}, [pathname, onClose])

	if (!isMounted) {
		return null
	}

	return (
		<div className='flex ml-auto lg:hidden'>
			<Button onClick={onOpen} className='mr-2' variant='ghost' size='sm'>
				<Menu />
			</Button>

			<Sheet open={isOpen} onOpenChange={onClose}>
				<SheetContent
					side='right'
					className='bg-[#1c1c1d] !w-full !max-w-none border-none z-[5000]'
				>
					<nav className='flex flex-col gap-y-12 items-center'>
						<Image src='/logo_v4_g.png' alt='logo' width={170} height={70} />
						<div className='flex flex-col items-center gap-2.5'>
							{items.map(item => (
								<Link key={item.href} href={item.href} onClick={onClose}>
									{item.title}
								</Link>
							))}
						</div>
						<div className='flex flex-col items-center gap-y-4'>
							{addressList.map(item => (
								<div
									key={item.address.title}
									className='flex flex-col items-center gap-y-1'
								>
									<Link href={item.phone.value} onClick={onClose}>
										{item.phone.title}
									</Link>
									<div>{item.workTime}</div>
									<Link
										href={item.address.href}
										onClick={onClose}
										target='_blank'
									>
										{item.address.title}
									</Link>
								</div>
							))}
						</div>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	)
}
