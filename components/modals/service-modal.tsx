'use client'

import { useServiceModal } from '@/hooks/use-service-modal'
import { useSubscribeModal } from '@/hooks/use-subscribe-modal'
import { Dialog, DialogContent } from '../ui/dialog'
import { Button } from '../ui/button'

export const ServiceModal = () => {
	const serviceModal = useServiceModal()
	const subscribeModal = useSubscribeModal()

	const service = serviceModal.service

	return (
		<Dialog open={serviceModal.isOpen} onOpenChange={serviceModal.onClose}>
			<DialogContent
				isDark={false}
				className='bg-secondary border-none md:px-20 md:py-10 pt-14 md:pt-10 w-full md:w-1/2 h-full md:h-auto max-w-[100%] overflow-hidden'
			>
				<div className='flex flex-col md:items-stretch relative before:absolute before:content-[""] before:top-0 before:right-0 before:w-44 before:lg:w-[19vw] before:h-60 before:lg:h-[27vw] before:block before:rotate-45 before:-translate-x-12  before:lg:translate-x-[9vw] before:-translate-y-20 before:lg:-translate-y-[17vw] before:shadow-[0_3.5px_3.5px_rgba(0,0,0,0.25),8.7px_26px_26px_rgba(0,0,0,.1)] before:grad before:bg-[radial-gradient(53.95%_53.95%_at_64.47%_34.21%,rgba(255,255,255,.15)_0,rgba(0,0,0,.15)_100%)]'>
					<p className='text-lg md:text-xl mb-4 md:mb-8  capitalize'>
						{service?.name}
					</p>
					<ul>
						{service?.prices.map(item => (
							<li
								key={item.title}
								className='list-[circle] md:text-lg list-inside'
							>
								<span className='pr-2'>{item.title}</span>
								<span className='lowercase'>{item.value}</span>
							</li>
						))}
					</ul>
					<div className='mt-16'>
						<Button
							onClick={() => {
								subscribeModal.onOpen()
								serviceModal.onClose()
							}}
						>
							Записаться на прием
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
