import { Logo } from '@/app/(home)/_components/logo'

import { NavMenu } from './navigation-menu'
import { HEADER_ITEM_LIST } from '@/constants/home-page/languages/en-us'

export const Navbar = () => {
	return (
		<div className='bg-white w-full flex items-center px-4 md:px-12'>
			<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
				<Logo />
				<div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
					<NavMenu items={HEADER_ITEM_LIST} />
				</div>
			</div>
		</div>
	)
}
