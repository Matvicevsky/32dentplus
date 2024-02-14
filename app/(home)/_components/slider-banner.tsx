'use client'

import Slider from 'react-slick'

import { useSubscribeModal } from '@/hooks/use-subscribe-modal'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { SliderBannerItem } from './slider-banner-item'

import { SLIDER_CONTENT } from '@/constants/ru/home-page/slider'
import { useAddressStore } from '@/store/use-address-store'
import { useEffect, useState } from 'react'

export const SliderBanner = () => {
	const { selectedAddress } = useAddressStore()
	const subscribeModal = useSubscribeModal()

	const [currentSlides, setCurrentSlides] = useState(
		SLIDER_CONTENT.find(
			item => item.city.toLowerCase() === selectedAddress.city.toLowerCase()
		)
	)

	useEffect(() => {
		setCurrentSlides(
			SLIDER_CONTENT.find(
				item => item.city.toLowerCase() === selectedAddress.city.toLowerCase()
			)
		)
	}, [selectedAddress])
	return (
		<section className='w-full relative'>
			<Slider
				dots={true}
				arrows={false}
				centerPadding='20'
				dotsClass={`slick-dots`}
				className='w-full'
			>
				{currentSlides?.slides.map(slide => (
					<SliderBannerItem item={slide} key={slide.image} />
				))}
			</Slider>
			<div
				className='lg:absolute -bottom-20 right-24 xl:right-64 flex lg:flex-col items-center gap-2 md:gap-8 lg:gap-12 px-4 lg:px-14 py-4 lg:py-8 lg:rounded-xl backdrop-blur-lg bg-blend-overlay bg-gradient-to-tr '
				style={{
					background:
						'linear-gradient(216.71deg,rgba(255,255,255,.3) .84%,rgba(255,255,255,.14375) 32.98%,rgba(255,255,255,.13125) 70.31%,rgba(255,255,255,0) 100.38%)',
				}}
			>
				<p className='uppercase text-lg md:text-xl lg:text-3xl'>
					запланируй <br /> свой визит
				</p>
				<Button variant='default' onClick={subscribeModal.onOpen}>
					Записаться на прием
				</Button>
			</div>
		</section>
	)
}

SliderBanner.Skeleton = function SliderBannerSkeleton() {
	return (
		<div className='w-full relative'>
			<Skeleton className='h-full w-full absolute' />
		</div>
	)
}
