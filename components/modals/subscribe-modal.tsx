'use client'

import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

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
import {
	Select,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectContent,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

const formSchema = z.object({
	username: z.string().min(2, 'Имя должно иметь больше 2 символов'),
	email: z.string().optional(),
	phone: z.string().min(9, 'Телефон должно иметь больше 9 символов'),
	city: z.string().min(2, 'Выберите город пожалуйста'),
	isValid: z.literal(true, {
		errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
	}),
})

export const SubscribeModal = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { toast } = useToast()
	const { selectedCity, cities } = useSelector(
		(state: RootState) => state.cities
	)
	const subscribeModal = useSubscribeModal()
	const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
		error: null,
		success: false,
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			email: '',
			city: '',
			phone: '',
		},
	})

	useEffect(() => {
		if (sendEmailState.success) {
			form.reset()
			subscribeModal.onClose()
			setIsLoading(false)
			toast({
				variant: 'success',
				description: 'Сообщение успешно отправлено',
				className: 'text-primary',
			})
			return
		}
		setIsLoading(false)
	}, [sendEmailState])

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		setIsLoading(true)
		sendEmailAction(data)
	}

	return (
		<Dialog open={subscribeModal.isOpen} onOpenChange={subscribeModal.onClose}>
			<DialogContent
				isDark={true}
				className='w-full md:w-[86%] h-full px-0 md:px-6 lg:px-10 py-5 md:py-6 lg:py-9 max-w-[100%] md:!rounded-[50px] text-secondary text-base flex flex-col items-center gap-[3vw] overflow-y-scroll lg:overflow-hidden'
			>
				<div className='w-[90%] flex flex-col items-start'>
					<p className='text-xl md:text-2xl lg:text-5xl font-semibold'>
						Получить консультацию
					</p>
					<span className='text-sm md:text-base lg:text-xl w-[60%]'>
						Оставьте ваши контактные данные и мы свяжемся с вами
					</span>
				</div>
				<div className='flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 w-[90%] '>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-4 lg:space-y-10 lg:w-1/2'
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
								name='city'
								render={({ field }) => (
									<FormItem>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger className='rounded-full px-9 py-4 border-secondary h-auto'>
													<SelectValue placeholder='Выберите город' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{cities.map(city => (
													<SelectItem key={city.city} value={city.city}>
														{city.city}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
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
								disabled={isLoading}
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
						<div
							style={{ backgroundImage: `url(${selectedCity?.logo})` }}
							className='bg-no-repeat bg-contain bg-center w-28 lg:w-[22vw] h-16 lg:h-[12vw]'
						/>
						<div className='w-full'>
							<a
								className='text-lg lg:text-2xl block lg:mb-4'
								href={selectedCity?.address.href || ''}
								target='_blank'
							>
								<strong>Адрес:</strong> {selectedCity?.address.title}
							</a>
							<div>
								<a
									className='text-lg lg:text-3xl'
									href={selectedCity?.phone.value || ''}
									target='_blank'
								>
									{selectedCity?.phone.phone}
								</a>
								<div className='font-semibold text-lg lg:text-2xl'>
									{selectedCity?.workTime.map((item, index) => (
										<p key={index}>
											{item.days} {item.time}
										</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
