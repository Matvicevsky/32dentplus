'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSubscribeModal } from '@/hooks/use-subscribe-modal'
import { Button } from '@/components/ui/button'

import { HEADER_ADDRESSES_LIST } from '@/constants/ru/home-page/header'

export const Footer = () => {
	const subscribeModal = useSubscribeModal()
	return (
		<footer id='footer' className='w-full pt-14 lg:pt-[12.7vw]'>
			<div className='w-full flex flex-col items-center'>
				<div className='w-8/12 md:w-1/3'>
					<Image
						src='/logo_v4_g.png'
						alt='logo image'
						width={200}
						height={200}
						className='w-full h-auto'
					/>
				</div>
				<div className='flex flex-col items-start md:items-stretch w-full bg-[rgba(63,62,62,.3)] bg-blend-overlay backdrop-blur-[2px] md:backdrop-blur-[5px] -mt-14 sm:-mt-32 md:-mt-[10vw] pt-20 md:pt-[6.14vw] px-[1.33%] md:px-[2%] pb-5 md:pb-[1.9vw] font-extralight'>
					<div className='w-full flex flex-col mb-4 md:mb-[4.09vw]'>
						{HEADER_ADDRESSES_LIST.map(item => (
							<div
								key={item.address.title}
								className=' flex flex-wrap w-full first:mb-4'
							>
								<div className='w-full md:w-2/3 md:pr-[15%] '>
									<Link
										href={item.address.href}
										className='md:text-[1.39vw] md:mb-[4.09vw] relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full'
									>
										Адрес: {item.address.title}
									</Link>
								</div>
								<div className='w-full md:w-1/3'>
									<Link
										href={item.phone.value}
										className='relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full text-lg md:text-[2.08vw] font-normal'
									>
										{item.phone.title}
									</Link>
									<p className='md:text-[1.64vw] font-normal'>
										{item.workTime}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className='flex flex-wrap'>
						<div className='flex flex-col items-start  w-full md:w-2/3 md:pr-[15%] mb-4 md:mb-0'>
							<p className='md:text-[1.39vw] md:mb-[4.09vw]'>
								ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА.
								Обращаем ваше внимание на то, что данный Интернет-сайт носит
								исключительно информационный характер и ни при каких условиях не
								является публичной офертой, определяемой положениями статьи 437
								Гражданского кодекса РФ.
							</p>
							<p className='md:text-[1.39vw] hidden md:block'>
								© 2024. Все права защищены.
							</p>
						</div>
						<div className='flex items-start w-full md:w-1/3 mb-4 md:mb-0'>
							<Button
								className='w-full md:w-auto text-sm md:text-[1.64vw] md:px-[2.28vw] md:py-[1.64vw] font-light h-auto'
								size='lg'
								onClick={subscribeModal.onOpen}
							>
								Записаться на прием
							</Button>
						</div>
						<p className='md:text-[1.39vw] block md:hidden'>
							© 2024. Все права защищены.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
