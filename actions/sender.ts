'use server'

import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_SEND_EMAIL)

type EmailSenderProps = {
	username: string
	email: string
	phone: string
}

export async function sendEmail({ email, username, phone }: EmailSenderProps) {
	try {
		const data = await resend.emails.send({
			from: `Acme <${email || 'onboarding@resend.dev'}>`,
			to: ['matvicevsky_ilya@mail.ru'],
			subject: 'Hello world',
			text: '',
			react: EmailTemplate({ username: 'John' }),
		})
		return data
	} catch (error) {
		return error
	}
}
