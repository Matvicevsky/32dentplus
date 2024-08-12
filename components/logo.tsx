'use client'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { Skeleton } from './ui/skeleton'
import { RootState } from '@/lib/store'

export const Logo = () => {
	const { selectedCity } = useSelector((state: RootState) => state.cities)
	return (
		<a href='/' title='logo link'>
			<div className='hover:opacity-75 transition items-center flex md:mr-16 max-h-[76px]'>
				<Image
					src={selectedCity?.logo || '/img-placeholder.svg'}
					alt='logo'
					height={75}
					width={130}
					className='h-[75px] w-[130px]'
					priority
				/>
			</div>
		</a>
	)
}

Logo.Skeleton = function SkeletonLogo() {
	return (
		<div className='w-[130px] h-[75px] transition items-center flex md:mr-16 max-h-[76px]'>
			<Skeleton className='w-full h-full bg-[rgba(63,62,62,.5)]' />
		</div>
	)
}
