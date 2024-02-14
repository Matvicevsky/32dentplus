'use client'

import Image from 'next/image'
import { useServiceModal } from '@/hooks/use-service-modal'
import { Button } from '@/components/ui/button'

type ServiceCartProps = {
	name: string
	description: string
	icon: string
	prices: {
		title: string
		value: string
	}[]
}

export const ServiceCart = ({ service }: { service: ServiceCartProps }) => {
	const serviceModal = useServiceModal()
	return (
		<div className='flex flex-col gap-y-6 pl-8 md:pl-[1.6vw] border-l mb-4 md:shrink md:grow-0 md:basis-[31%]'>
			<Image
				src={service.icon || '/img-placeholder.svg'}
				alt='service icon'
				width={76}
				height={64}
				className='text-primary'
			/>
			<h4 className='uppercase md:text-lg font-normal mb-0 md:mb-3'>
				{service.name}
			</h4>
			<p className='md:text-lg mb-0 md:mb-6'>{service.description}</p>
			<div className='mt-auto'>
				<Button
					onClick={() => serviceModal.onOpen(service)}
					variant='underline'
					size='xs'
					className='text-base font-normal'
				>
					подробнее
				</Button>
			</div>
		</div>
	)
}
