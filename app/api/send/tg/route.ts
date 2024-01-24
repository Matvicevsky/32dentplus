import type { NextApiRequest, NextApiResponse } from 'next'

const TelegramBot = require('node-telegram-bot-api')

const TELEGRAM_BOT_TOKEN =
	process.env.NEXT_PUBLIC_TELEGRAM_TOKEN ||
	'6719192429:AAHvuSUnOQJYQUZPc6VxCj6IL4Gvd4hKhJk'
const TELEGRAM_CHAT_ID =
	process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '@dentPlusMessage'

export async function POST(
	req: Request,
	body: {
		username: string
		email: string
		phone: string
	}
) {
	try {
		const bot = new TelegramBot(TELEGRAM_BOT_TOKEN)

		// console.log('REQUEST:', req.json())

		console.log('bodybodybody', body)

		// const { username, email, phone } = req

		const text = '`Заявка от ${username}!\nEmail: ${email}\nТелефон: ${phone}`'

		await bot.sendMessage(TELEGRAM_CHAT_ID, text)

		return Response.json({ message: 'Сообщение отправлено' })
	} catch (error: any) {
		console.log('[SEND_TG_MESSAGE]:', error)
		return Response.json({ message: error.message }, { status: 500 })
	}
}
