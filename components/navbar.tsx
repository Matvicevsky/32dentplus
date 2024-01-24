import { Logo } from '@/components/logo'

import {
	HEADER_ADDRESSES_LIST,
	HEADER_ITEM_LIST,
} from '@/constants/ru/home-page/header'
import { NavMenu } from './navigation-menu'
import { MobileSidebar } from './mobile-sidebar'

export const Navbar = () => {
	return (
		<header className='bg-[rgba(63,62,62,.5)] w-full backdrop-blur-lg md:backdrop-blur-xl sticky top-0 left-0 right-0 z-50'>
			<div className='pb-1.5 pt-2.5 mx-auto flex items-center w-[97%] md:w-[95%]'>
				<Logo />
				<MobileSidebar
					items={HEADER_ITEM_LIST}
					addressList={HEADER_ADDRESSES_LIST}
				/>
				<NavMenu items={HEADER_ITEM_LIST} addressList={HEADER_ADDRESSES_LIST} />
			</div>
		</header>
	)
}
