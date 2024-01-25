'use client'

import { useAddressStore } from '@/store/use-address-store'
import useStore from '@/store/use-store'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select'

export const CitySelector = () => {
	const useAddress = useStore(useAddressStore, state => state)

	return (
		<Select
			onValueChange={useAddress?.onSelectAddress}
			value={useAddress?.selectedAddress.city}
		>
			<SelectTrigger className='w-full md:w-[180px] capitalize text-lg focus:bg-transparent bg-transparent text-primary border-none md:ml-4 pb-3'>
				<SelectValue placeholder='Выберите город' />
			</SelectTrigger>
			<SelectContent className='bg-transparent text-primary'>
				<SelectItem value='Минск' className='capitalize text-lg '>
					минск
				</SelectItem>
				<SelectItem value='Рогачев' className='capitalize text-lg '>
					рогачев
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
