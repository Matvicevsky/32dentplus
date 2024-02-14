import { useEffect, useState } from 'react'

interface SliderBannerItemProps {
	title: string
	subTitle: string
	image: string
}

export const SliderBannerItem = ({ item }: { item: SliderBannerItemProps }) => {
	const { title, subTitle, image } = item

	const [src, setSrc] = useState<string | null>(image)

	useEffect(() => {
		setSrc(null)
		const timeout = setTimeout(() => {
			setSrc(image)
		}, 1)
		return () => {
			clearTimeout(timeout)
		}
	}, [image])

	if (image.includes('.mp4')) {
		return (
			<div className='w-full h-[464px] lg:h-[88vh] bg-no-repeat bg-cover bg-center flex items-center md:items-end relative'>
				{src && (
					<video
						autoPlay
						loop
						muted
						playsInline
						className='w-full h-full object-fill absolute'
					>
						<source src={src || '/img-placeholder.svg'} type='video/mp4' />
					</video>
				)}
				<div className='w-full h-[464px] lg:h-[88vh] bg-no-repeat bg-cover bg-center p-4 md:px-32 md:py-24 flex items-center md:items-end'>
					<div className='md:max-w-[60%] flex flex-col space-y-4 z-50'>
						<h2 className='text-xl md:text-3xl'>{title}</h2>
						<p className='text-xs md:text-base'>{subTitle}</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div
			className='w-full h-[464px] lg:h-[88vh] bg-no-repeat bg-cover bg-center p-4 md:px-32 md:py-24 flex items-center md:items-end'
			style={{
				backgroundImage: `url(${src || '/img-placeholder.svg'})`,
			}}
		>
			<div className='md:max-w-[60%] flex flex-col space-y-4'>
				<h2 className='text-xl md:text-3xl'>{title}</h2>
				<p className='text-xs md:text-base'>{subTitle}</p>
			</div>
		</div>
	)
}
