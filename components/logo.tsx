'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useAddressStore } from '@/store/use-address-store'

const config = require('../next.config.js')

export const Logo = () => {
	const { selectedAddress } = useAddressStore()
	return (
		<Link href='/'>
			<div className='hover:opacity-75 transition items-center flex md:mr-16 max-h-[76px]'>
				<Image
					src={`${config.basePath}/${selectedAddress.logo}`}
					alt='logo'
					height={75}
					width={130}
				/>
			</div>
		</Link>
	)
}
