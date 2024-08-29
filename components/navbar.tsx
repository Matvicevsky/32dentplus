'use client'

import { memo, useRef } from 'react'
import NavMenu from './navigation-menu'
import MobileSidebar from './mobile-sidebar'
import { Logo } from '@/components/logo'
import { NavLinkType } from '@/types/header'
import { fetchCities } from '@/lib/features/citiesSlice'
import { useAppStore } from '@/lib/hooks'

const Navbar = ({ items }: { items: NavLinkType[] | null }) => {
	const store = useAppStore()
	const initialized = useRef(false)
	if (!initialized.current) {
		store.dispatch(fetchCities())
		initialized.current = true
	}
	if (!items) return null
	return (
		<header className='bg-[rgba(63,62,62,.5)] w-full backdrop-blur-lg md:backdrop-blur-xl sticky top-0 left-0 right-0 z-50'>
			<div className='pb-1.5 pt-2.5 mx-auto flex items-center w-[97%] md:w-[95%]'>
				<Logo />
				<MobileSidebar items={items} />
				<NavMenu items={items} />
			</div>
		</header>
	)
}

export default memo(Navbar)
