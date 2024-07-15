import Image from 'next/image'
import { DoctorType } from '@/types/doctor'
import { memo } from 'react'

const EmployeeCard = ({ employee }: { employee: DoctorType }) => {
	const { experience, name, id, type, image } = employee

	return (
		<a
			href={`/doctors/${id}`}
			className='relative flex flex-col items-start h-auto  gap-2 md:gap-[0.614vw] transition  duration-1000  hover:scale-105 py-4 mr-6 md:mr-8 lg:mr-12 xl:mr-20'
		>
			<div className='flex items-end justify-center w-full h-[375px] md:h-[32.78vw] border border-primary relative'>
				<Image
					src={image || '/img-placeholder.svg'}
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

export default memo(EmployeeCard)
