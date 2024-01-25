'use client'

import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'

import { useSubscribeModal } from '@/hooks/use-subscribe-modal'
import { sendEmail } from '@/actions/sender'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

import { HEADER_ADDRESSES_LIST } from '@/constants/ru/home-page/header'

const formSchema = z.object({
	username: z.string().min(2, 'Имя должно иметь больше 2 символов'),
	email: z.string().email({ message: 'Некоректный email.' }).optional(),
	phone: z.string(),
	isValid: z.literal(true, {
		errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
	}),
})

export const SubscribeModal = () => {
	const subscribeModal = useSubscribeModal()
	const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
		error: null,
		success: false,
	})

	useEffect(() => {
		if (sendEmailState.success) {
			subscribeModal.onClose()
		}
	}, [sendEmailState])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			phone: '',
		},
	})

	return (
		<Dialog open={subscribeModal.isOpen} onOpenChange={subscribeModal.onClose}>
			<DialogContent
				isDark={true}
				className='w-full md:w-[86%] h-full px-0 md:px-6 lg:px-10 py-5 md:py-6 lg:py-9 max-w-[100%] md:!rounded-[50px] text-secondary text-base flex flex-col items-center gap-[3.3vw]'
			>
				<div className='w-[90%] flex flex-col items-start'>
					<p className='text-xl md:text-2xl lg:text-5xl font-semibold'>
						Получить консультацию
					</p>
					<span className='text-sm md:text-base lg:text-xl'>
						Оставьте ваши контактные данные и мы свяжемся с вами
					</span>
				</div>
				<div className='flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 w-[90%] '>
					<Form {...form}>
						<form
							action={sendEmailAction}
							className='space-y-4 lg:space-y-12 lg:w-1/2'
						>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className='rounded-full px-9 py-4 border-secondary h-auto'
												placeholder='Ваше имя'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								rules={{ required: false }}
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder='Email'
												className='rounded-full px-9 py-4 border-secondary h-auto'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className='rounded-full px-9 py-4 border-secondary h-auto'
												placeholder='+375 33 000 00 00'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='isValid'
								render={({ field }) => (
									<FormItem className='flex items-center space-x-2'>
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												className='!appearance-none !text-secondary border-secondary'
											/>
										</FormControl>
										<FormLabel className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
											отправляя данную форму Вы соглашаетесь с{' '}
											<strong>
												политикой использования персональных данных.
											</strong>
										</FormLabel>
									</FormItem>
								)}
							/>
							<Button
								type='submit'
								size='lg'
								className='text-secondary border-secondary !text-xl w-full lg:w-auto'
							>
								Отправить сообщение
							</Button>
							{sendEmailState.error && (
								<p className='!mt-2 text-red-700'>
									Ошибка, проверьте введенные данные и повторите снова
								</p>
							)}
						</form>
					</Form>
					<div className='lg:-mt-[5vw] lg:w-1/2 lg:pl-[10vw] flex lg:flex-col gap-[4vw] flex-wrap'>
						<div className='bg-[url("/logo_v4_g.png")] bg-no-repeat bg-contain bg-center w-28 lg:w-[22vw] h-16 lg:h-[12vw]' />
						{HEADER_ADDRESSES_LIST.map(item => (
							<div className='w-full' key={item.address.href}>
								<Link
									className='text-lg lg:text-2xl block lg:mb-4'
									href={item.address.href}
								>
									<strong>Адрес:</strong> {item.address.title}
								</Link>
								<div>
									<Link className='text-lg lg:text-3xl' href={item.phone.value}>
										{item.phone.title}
									</Link>
									<p className='font-semibold text-lg lg:text-2xl'>
										{item.workTime}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
