'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

type SelectorPanelProps = {
	handlerSelect: ({ city, type }: { city: string; type: string }) => void
	categories: string[]
}

export const SelectorPanel = ({
	handlerSelect,
	categories,
}: SelectorPanelProps) => {
	const { cities } = useSelector((state: RootState) => state.cities)
	const [selectedCity, setSelectedCity] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('все врачи')

	useEffect(() => {
		handlerSelect({
			city: selectedCity,
			type: selectedCategory,
		})
	}, [handlerSelect, selectedCategory, selectedCity])

	return (
		<div className='flex flex-wrap text-lg'>
			{categories.map(category => {
				return (
					<div
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={cn(
							'border-b cursor-pointer mb-4 md:mb-6 hover:cursor-pointer mx-4 md:mx-0 md:px-4 transition duration-1000 w-full md:w-auto text-center',
							selectedCategory === category &&
								'border-b-0 border-x border-t rounded-t-lg'
						)}
					>
						<span className=''>
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</span>
					</div>
				)
			})}
			<Select onValueChange={setSelectedCity} value={selectedCity}>
				<SelectTrigger className='w-full md:w-[180px] capitalize text-lg focus:ring-secondary bg-secondary text-primary border-none ml-4 pb-3'>
					<SelectValue placeholder='Выберите город' />
				</SelectTrigger>
				<SelectContent className='bg-secondary text-primary'>
					{cities.map(city => {
						return (
							<SelectItem
								key={city.id}
								value={city.city}
								className='capitalize text-lg '
							>
								{city.city}
							</SelectItem>
						)
					})}
				</SelectContent>
			</Select>
		</div>
	)
}
