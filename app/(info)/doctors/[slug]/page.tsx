import Image from 'next/image'
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'

import { InfoList } from './_components/info-list'
import { CertificatesSlider } from './_components/certifates-slider'
import { EMPLOYEES } from '@/constants/ru/staff/employees'

import s from './page.module.css'

export default function EmployeePage({ params }: { params: { slug: string } }) {
	const employee = EMPLOYEES.find(item => item.id === params.slug)

	console.log(params.slug)

	if (!employee) {
		redirect('/')
	}

	return (
		<section id='#specialist' className='md:-mb-32'>
			<div className='w-full md:overflow-hidden md:h-[82dvh] pt-7 pb-10 md:p-0'>
				<div className='flex flex-col md:flex-row w-[94%] md:w-[97%] gap-10 md:gap-24 h-full mx-auto'>
					<div className='flex items-start gap-4 w-full md:w-[40%] border-b md:border-none md:h-full flex-grow'>
						<div className='w-1/2 md:w-full h-full'>
							<Image
								src={employee.image || ''}
								alt='employee photo'
								width={100}
								height={100}
								className='w-full h-auto md:mx-auto md:my-0 xl:w-auto xl:h-full'
							/>
						</div>
						<div className='md:hidden flex flex-col items-start w-1/2'>
							<p className='font-normal'>{employee?.name}</p>
							<p className='font-normal mt-2.5'>Врач {employee.type}</p>
							<p>Врачебный стаж: {employee.experience} лет</p>
						</div>
					</div>
					<div
						className={cn(
							'w-full md:w-[60%] flex items-start flex-col md:overflow-y-scroll md:gap-[2.34vw] md:px-[5%] md:pt-0 md:pb-24 md:h-full',
							s.root
						)}
					>
						<div className='hidden md:flex md:w-full md:flex-col md:items-start'>
							<p className='text-[1.95vw] font-normal'>{employee?.name}</p>
							<p className='text-[1.56vw] font-normal mt-2.5'>
								Врач {employee.type}
							</p>
							<p className='text-[1.56vw]'>
								Врачебный стаж: {employee.experience} лет
							</p>
						</div>
						<div className='flex flex-col items-start w-full gap-7 md:gap-[1.56vw]'>
							<InfoList title='Специализация врача' list={employee.services} />
							<InfoList title='Образование' list={employee.education} />
							<InfoList
								title='Повышение квалификации'
								list={employee.training}
							/>
						</div>
						{employee.certificates && (
							<CertificatesSlider certificates={employee.certificates} />
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
