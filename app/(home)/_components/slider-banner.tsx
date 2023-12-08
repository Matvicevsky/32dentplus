'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import { SliderBannerItem } from './slider-banner-item'

import { SLIDER_CONTENT } from '@/constants/home-page/languages/en-us'

export const SliderBanner = () => {
	return (
		<Slider
			dots={true}
			arrows={false}
			centerPadding='20'
			dotsClass={`slick-dots`}
			className='w-full h-[700px]'
		>
			{SLIDER_CONTENT.map(slide => (
				<SliderBannerItem item={slide} key={slide.image} />
			))}
		</Slider>
	)
}
