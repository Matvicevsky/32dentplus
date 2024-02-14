'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'

type CertificatesSliderProps = {
	certificates: string[]
}

export const CertificatesSlider = ({
	certificates,
}: CertificatesSliderProps) => {
	return (
		<PhotoProvider>
			<div className='w-full relative mt-8 md:mt-0'>
				<Slider arrows={false} infinite={true} adaptiveHeight slidesToShow={1}>
					{certificates.map((item, index) => (
						<PhotoView key={index} src={item || '/img-placeholder.svg'}>
							<Image
								src={item}
								width={100}
								height={100}
								alt='certificate image'
								className='w-full hover:cursor-pointer'
							/>
						</PhotoView>
					))}
				</Slider>
			</div>
		</PhotoProvider>
	)
}
