'use client'

import { memo } from 'react'
import NavMenu from './navigation-menu'
import MobileSidebar from './mobile-sidebar'
import { Logo } from '@/components/logo'
import { NavLinkType } from '@/types/header'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

const Navbar = ({ items }: { items: NavLinkType[] | null }) => {
	const { loading } = useSelector((state: RootState) => state.cities)
	console.log(loading)

	if (!items) return null
	return (
		<header className='bg-[rgba(63,62,62,.5)] w-full backdrop-blur-lg md:backdrop-blur-xl sticky top-0 left-0 right-0 z-50'>
			<div className='pb-1.5 pt-2.5 mx-auto flex items-center w-[97%] md:w-[95%]'>
				{loading ? <Logo.Skeleton /> : <Logo />}
				<MobileSidebar items={items} />
				<NavMenu items={items} />
			</div>
		</header>
	)
}

export default memo(Navbar)
