'use server'

import EmailTemplate from '@/components/email-template'
import { Resend } from 'resend'
import { render } from '@react-email/render'
const TelegramBot = require('node-telegram-bot-api')

interface State {
	error: string | null
	success: boolean
}

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN
const TELEGRAM_CHAT_ID =
	process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '@dentPlusMessage'

export async function sendEmail(prevState: State, formData: FormData) {
	const username = formData.get('username') as string
	const email = formData.get('email') as string
	const phone = formData.get('phone') as string
	try {
		const resend = new Resend(process.env.NEXT_PUBLIC_SEND_EMAIL)
		const bot = new TelegramBot(TELEGRAM_BOT_TOKEN)
		const text = `Заявка от ${username}!\nEmail: ${email}\nТелефон: ${phone}`

		await Promise.all([
			await resend.emails.send({
				from: `32dent <onboarding@resend.dev>`,
				to: ['matvicevsky_ilya@mail.ru'],
				subject: 'Свяжитесь со мной',
				html: render(EmailTemplate({ username, email, phone })),
			}),

			bot.sendMessage(TELEGRAM_CHAT_ID, text),
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
