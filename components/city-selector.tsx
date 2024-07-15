'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { cn } from '@/lib/utils'

import { onSelectCity } from '@/lib/features/citiesSlice'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { RootState } from '@/lib/store'
import { Skeleton } from './ui/skeleton'

const DropdownMenuSkeleton = () => {
	return (
		<div className='flex flex-col items-center justify-between min-w-14 cursor-pointer h-[54px]'>
			<Skeleton className='w-[26px] h-[26px] bg-[rgba(63,62,62,.5)]' />
			<Skeleton className='w-full h-5 bg-[rgba(63,62,62,.5)]' />
		</div>
	)
}

export const CitySelector = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { selectedCity, cities, loading } = useSelector(
		(state: RootState) => state.cities
	)

	const handleCitySelect = (city: string) => {
		dispatch(onSelectCity(city))
		localStorage.setItem('city', city)
		router.refresh()
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				{loading ? (
					<DropdownMenuSkeleton />
				) : (
					<div className='flex flex-col items-center justify-center min-w-14 cursor-pointer'>
						<Image
							src={selectedCity?.icon || '/img-placeholder.svg'}
							width={30}
							height={30}
							loading='eager'
							alt='city logo'
						/>
						<p className='font-normal'>{selectedCity?.city}</p>
					</div>
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent asChild align='end'>
				<div className='flex flex-col md:flex-row w-full cursor-pointer'>
					{cities.map(item => (
						<DropdownMenuItem
							asChild
							key={item.id}
							className={cn(
								'py-8 px-12',
								selectedCity?.city === item.city &&
									'bg-secondary/30 text-primary'
							)}
							onClick={() => {
								handleCitySelect(item.city)
							}}
						>
							<div className='flex flex-col'>
								<Image
									src={item.icon || '/img-placeholder.svg'}
									width={64}
									height={64}
									alt='city logo'
									className={cn(
										selectedCity?.city === item.city && 'grayscale'
									)}
								/>
								<p>{item.city}</p>
							</div>
						</DropdownMenuItem>
					))}
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
