type InfoListProps = {
	title: string
	list: string[]
}

export const InfoList = ({ list, title }: InfoListProps) => {
	return (
		<div className='flex flex-col items-start w-full gap-7 md:gap-[1.56vw]'>
			<p className='text-base font-normal md:text-[1.72vw]'>{title}</p>
			<ul className='flex flex-col items-start pl-[4.6%] gap-1 list-disc'>
				{list.map((item, index) => (
					<li key={index} className='md:text-[1.17vw]'>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
