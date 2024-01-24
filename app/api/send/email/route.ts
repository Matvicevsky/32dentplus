import { EmailTemplate } from '@/components/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_SEND_EMAIL)

type BodyType = {
	username: string
	email: string
	phone: string
}

export async function POST(req: Request) {
	try {
		const { username, email, phone } = await req.json()
		const data = await resend.emails.send({
			from: `32Dent <${email}>`,
			to: ['matvicevsky_ilya@mail.ru'],
			subject: 'Заявка',
			text: `Заявка от ${username}!\nEmail: ${email}
			\nТелефон: ${phone}`,
			react: EmailTemplate({ username: 'John' }),
		})

		return Response.json(data)
	} catch (error: any) {
		return new NextResponse('Internal Error', {
			status: 500,
			statusText: error.message,
		})
	}
}
