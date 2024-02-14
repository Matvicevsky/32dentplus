'use client'

import { useAddressStore } from '@/store/use-address-store'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

export const CitySelector = () => {
	const { selectedAddress, addresses, onSelectAddress } = useAddressStore()

	const handleCitySelect = (city: string) => {
		onSelectAddress(city)

		localStorage.setItem('city', city)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex flex-col items-center justify-center min-w-14 cursor-pointer'>
					<Image
						src={selectedAddress.icon || ''}
						width={30}
						height={30}
						loading='eager'
						alt='city logo'
					/>
					<p className='font-normal'>{selectedAddress.city}</p>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent asChild align='end'>
				<div className='flex w-full cursor-pointer'>
					{addresses.map(item => (
						<DropdownMenuItem
							asChild
							key={item.id}
							className={cn(
								'py-8 px-12',
								selectedAddress.city === item.city &&
									'bg-secondary/30 text-primary'
							)}
							onClick={() => {
								handleCitySelect(item.city)
							}}
						>
							<div className='flex flex-col'>
								<Image
									src={item.icon || ''}
									width={64}
									height={64}
									alt='city logo'
									className={cn(
										selectedAddress.city === item.city && 'grayscale'
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
