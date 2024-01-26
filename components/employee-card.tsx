import Image from 'next/image'
import Link from 'next/link'

type EmployeeCardProps = {
	employee: {
		id: string
		name: string
		city: string
		image_bg?: string
		image?: string
		type: string
		category: string
		experience: number
		training: string[]
		education: string[]
		services: string[]
	}
}

export const EmployeeCard = ({ employee }: EmployeeCardProps) => {
	const { experience, name, id, type, image } = employee

	return (
		<a
			href={`/doctors/${id}`}
			className='relative flex flex-col items-start h-auto  gap-2 md:gap-[0.614vw] transition  duration-1000  hover:scale-105 py-4 mr-6 md:mr-8 lg:mr-12 xl:mr-20'
		>
			<div className='flex items-end justify-center w-full h-[375px] md:h-[32.78vw] border border-primary relative'>
				<Image
					src={image || ''}
					width={100}
					height={100}
					objectFit='contain'
					alt='doctor image'
					className='block w-auto h-full'
				/>
			</div>
			<div className='flex flex-col items-start w-full text-sm md:text-[1.29vw] md:leading-tight font-normal'>
				<h2 className=''>{name}</h2>
				<p className=''>Врач {type}</p>
				<p className='font-light'>Врачебный стаж: {experience} лет</p>
			</div>
		</a>
	)
}
