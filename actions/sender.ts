'use server'

import EmailTemplate from '@/components/email-template'
import { Resend } from 'resend'
import { render } from '@react-email/render'
const TelegramBot = require('node-telegram-bot-api')

interface State {
	error: string | null
	success: boolean
}

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN || ''
const TELEGRAM_CHAT_ID =
	process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '@dentPlusMessage'

type SenderProps = {
	username: string
	email?: string
	phone: string
	city: string
}
export async function sendEmail(prevState: State, data: SenderProps) {
	const { username, city, email, phone } = data
	try {
		const resend = new Resend(process.env.NEXT_PUBLIC_SEND_EMAIL)
		const bot = new TelegramBot(TELEGRAM_BOT_TOKEN)
		const text = `Заявка от ${username}!\nГород: ${city}\nEmail: ${email}\nТелефон: ${phone}`

		await Promise.all([
			await resend.emails.send({
				from: `32dent <32dentplus@32dent.by>`,
				to: ['32dentplus@gmail.com'],
				subject: 'Свяжитесь со мной',
				html: render(EmailTemplate({ username, email, phone, city })),
			}),

			await bot.sendMessage(TELEGRAM_CHAT_ID, text),
		])
		return {
			error: null,
			success: true,
		}
	} catch (error) {
		console.log(error)
		return {
			error: (error as Error).message,
			success: false,
		}
	}
}
