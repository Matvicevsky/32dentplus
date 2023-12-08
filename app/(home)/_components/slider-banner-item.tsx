import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SliderBannerItemProps {
	title: string
	subTitle: string
	image: string
	button: {
		title: string
		href?: string
	}
}

export const SliderBannerItem = ({ item }: { item: SliderBannerItemProps }) => {
	const { title, button, subTitle, image } = item

	return (
		<div
			className='w-full h-[700px] bg-no-repeat bg-cover bg-center p-4 md:px-32 md:py-24 flex items-center'
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className='max-w-[60%] flex flex-col space-y-4 gap-y-4'>
				<h2 className='text-2xl md:text-6xl'>{title}</h2>
				<p className='text-sm md:text-2xl'>{subTitle}</p>
				<div>
					{button.href ? (
						<Link href={button.href}>{button.title}</Link>
					) : (
						<Button size='lg' className='text-sm md:text-xl'>
							{button.title}
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
