import Image from 'next/image'

type PromotionItemProps = {
	title: string
	img: string
	services: string[]
	condition?: string
}

export const PromotionItem = ({
	promotion,
}: {
	promotion: PromotionItemProps
}) => {
	return (
		<div className='md:shrink md:grow-0 md:basis-[31%]'>
			<div className='w-full border-l mb-8 md:mb-[2vw] pl-8 md:pl-[1.6vw]'>
				<h3 className='md:text-lg font-normal'>{promotion.title}</h3>
			</div>
			<div className='relative w-full aspect-video rounded-3xl overflow-hidden mb-8 md:mb-[2vw]'>
				<Image
					src={promotion.img}
					alt='promotion image'
					fill
					objectFit='cover'
				/>
			</div>
			<div className='flex relative flex-col items-start w-full gap-4 pl-8 md:gap-[1.22vw] md:pl-[1.63vw] mb-8 md:mb-[2vw]'>
				<span className='absolute top-0 left-0 w-[1px] h-full bg-primary before:content-[""] before:absolute before:top-0 before:-left-0.5 before:w-1.5 before:h-1.5 before:border before:rounded-full before:bg-secondary after:content-[""] after:absolute after:bottom-0 after:-left-0.5 after:w-1.5 after:h-1.5 after:border after:rounded-full after:bg-secondary' />
				{promotion.services.map(item => (
					<p key={item}>{item}</p>
				))}
			</div>
			{promotion.condition && (
				<div>
					<p className='font-normal'>Внимание!</p>
					<span>{promotion.condition}</span>
				</div>
			)}
		</div>
	)
}
