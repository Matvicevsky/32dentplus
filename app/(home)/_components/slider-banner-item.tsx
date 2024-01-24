interface SliderBannerItemProps {
	title: string
	subTitle: string
	image: string
}

export const SliderBannerItem = ({ item }: { item: SliderBannerItemProps }) => {
	const { title, subTitle, image } = item

	return (
		<div
			className='w-full h-[464px] lg:h-[88vh] bg-no-repeat bg-cover bg-center p-4 md:px-32 md:py-24 flex items-center md:items-end'
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className='md:max-w-[60%] flex flex-col space-y-4'>
				<h2 className='text-xl md:text-3xl'>{title}</h2>
				<p className='text-xs md:text-base'>{subTitle}</p>
			</div>
		</div>
	)
}
