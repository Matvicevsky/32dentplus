'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { CITIES } from '@/constants/ru/staff/cities'
import { DOCTORS_CATEGORIES } from '@/constants/ru/staff/categories'

type SelectorPanelProps = {
	handlerSelect: ({ city, type }: { city: string; type: string }) => void
}

export const SelectorPanel = ({ handlerSelect }: SelectorPanelProps) => {
	const [selectedCity, setSelectedCity] = useState('все')
	const [selectedCategory, setSelectedCategory] = useState('Все врачи')

	useEffect(() => {
		handlerSelect({
			city: selectedCity,
			type: selectedCategory,
		})
	}, [selectedCategory, selectedCity])

	return (
		<div className='flex space-x-2 text-lg'>
			{DOCTORS_CATEGORIES.map(category => {
				return (
					<div
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={cn(
							'border rounded-md flex items-center justify-center px-4 py-1 bg-white hover:border-secondary hover:text-secondary hover:cursor-pointer',
							selectedCategory === category && 'border-secondary text-secondary'
						)}
					>
						{category}
					</div>
				)
			})}
			<Select onValueChange={setSelectedCity} value={selectedCity}>
				<SelectTrigger className='w-[180px] capitalize text-lg focus:ring-secondary'>
					<SelectValue placeholder='Выберите город' />
				</SelectTrigger>
				<SelectContent>
					{CITIES.sort().map(city => {
						return (
							<SelectItem
								key={city}
								value={city}
								className='capitalize text-lg'
							>
								{city}
							</SelectItem>
						)
					})}
				</SelectContent>
			</Select>
		</div>
	)
}
