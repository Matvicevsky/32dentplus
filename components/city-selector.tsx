'use client'

import { useAddressStore } from '@/store/use-address-store'
import useStore from '@/store/use-store'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'

export const CitySelector = () => {
	const useAddress = useStore(useAddressStore, state => state)

	const router = useRouter()
	const pathname = usePathname()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex flex-col items-center justify-center min-w-14 cursor-pointer'>
					<Image
						src={useAddress?.selectedAddress.icon || ''}
						width={30}
						height={30}
						loading='eager'
						alt='city logo'
					/>
					<p className='font-normal'>{useAddress?.selectedAddress.city}</p>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent asChild align='end'>
				<div className='flex w-full cursor-pointer'>
					{useAddress?.addresses.map(item => (
						<DropdownMenuItem
							asChild
							key={item.id}
							className={cn(
								'py-8 px-12',
								useAddress.selectedAddress.city === item.city &&
									'bg-secondary/30 text-primary'
							)}
							onClick={() => {
								useAddress?.onSelectAddress(item.city)
								router.push(pathname)
							}}
						>
							<div className='flex flex-col'>
								<Image
									src={item.icon || ''}
									width={64}
									height={64}
									alt='city logo'
									className={cn(
										useAddress.selectedAddress.city === item.city && 'grayscale'
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
