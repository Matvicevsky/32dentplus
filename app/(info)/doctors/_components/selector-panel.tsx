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
	const [selectedCity, setSelectedCity] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('Все врачи')

	useEffect(() => {
		handlerSelect({
			city: selectedCity,
			type: selectedCategory,
		})
	}, [selectedCategory, selectedCity])

	return (
		<div className='flex flex-wrap text-lg'>
			{DOCTORS_CATEGORIES.map(category => {
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
						<span className=''>{category}</span>
					</div>
				)
			})}
			<Select onValueChange={setSelectedCity} value={selectedCity}>
				<SelectTrigger className='w-full md:w-[180px] capitalize text-lg focus:ring-secondary bg-secondary text-primary border-none ml-4 pb-3'>
					<SelectValue placeholder='Выберите город' />
				</SelectTrigger>
				<SelectContent className='bg-secondary text-primary'>
					{CITIES.sort().map((city, index) => {
						return (
							<SelectItem
								key={index}
								value={city}
								className='capitalize text-lg '
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
