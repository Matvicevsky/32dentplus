import { memo } from 'react'

interface SliderBannerItemProps {
	title: string
	subTitle: string
	image: string
}

const SliderBannerItem = ({ item }: { item: SliderBannerItemProps }) => {
	const { title, subTitle, image } = item

	if (image.includes('media')) {
		return (
			<div className='w-full h-[464px] lg:h-[88vh] bg-no-repeat bg-cover bg-center flex items-center md:items-end relative'>
				{image && (
					<video
						autoPlay
						loop
						muted
						playsInline
						className='w-full h-full object-fill absolute'
					>
						<source src={image || '/img-placeholder.svg'} type='video/mp4' />
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
				backgroundImage: `url(${image || '/img-placeholder.svg'})`,
			}}
		>
			<div className='md:max-w-[60%] flex flex-col space-y-4'>
				<h2 className='text-xl md:text-3xl'>{title}</h2>
				<p className='text-xs md:text-base'>{subTitle}</p>
			</div>
		</div>
	)
}

export default memo(SliderBannerItem)
