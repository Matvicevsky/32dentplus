'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import Link from 'next/link'

import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'

import { useAddressStore } from '@/app/store/use-address-store'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from './ui/sheet'
import useStore from '@/app/store/use-store'

interface MobileSidebarProps {
	items: {
		title: string
		href: string
	}[]
}

export const MobileSidebar = ({ items }: MobileSidebarProps) => {
	const pathname = usePathname()
	const selectedAddress = useStore(
		useAddressStore,
		state => state.selectedAddress
	)
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
							<div className='flex flex-col items-center gap-y-1'>
								<Link
									href={selectedAddress?.phone.value || ''}
									onClick={onClose}
									className='w-full text-start'
								>
									{selectedAddress?.phone.title}
								</Link>
								<div className='w-full text-start'>
									{selectedAddress?.workTime.map((item, index) => (
										<p key={index}>
											{item.days} {item.time}
										</p>
									))}
								</div>
								<Link
									href={selectedAddress?.address.href || ''}
									onClick={onClose}
									target='_blank'
								>
									{selectedAddress?.address.title}
								</Link>
							</div>
						</div>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	)
}
