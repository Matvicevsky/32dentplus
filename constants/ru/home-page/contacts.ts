import { IconTree, IconType } from 'react-icons'
import { FaViber, FaPhone, FaMailBulk, FaTelegramPlane } from 'react-icons/fa'

const config = require('../../../next.config.js')

enum ContactsType {
	tel = 'tel',
	email = 'email',
	viber = 'viber',
	tg = 'telegram',
}
enum CityType {
	minsk = 'Минск',
	rogochev = 'Рогочев',
}

export const CONTACTS: {
	title: string
	address: {
		city: CityType
		coordinates: {
			lng: number
			lat: number
		}
		workTime: {
			days: string
			time: string
		}[]
		contacts: {
			type: ContactsType
			text: string
			value: string
			icon: IconType
		}[]
	}[]
} = {
	title: 'клиники',
	address: [
		{
			city: CityType.minsk,
			coordinates: {
				lng: 27.535948,
				lat: 53.91483,
			},
			workTime: [
				{
					days: 'Пн-Пт',
					time: '09:00 - 20:00',
				},
				{
					days: 'Сб',
					time: '09:00 - 15:00',
				},
				{
					days: 'Вс',
					time: 'выходной',
				},
			],
			contacts: [
				{
					type: ContactsType.tel,
					text: '+375 (33) 000 00 00',
					value: 'tel:+375330000000',
					icon: FaPhone,
				},
				{
					type: ContactsType.email,
					text: 'example@gmail.com',
					value: 'mailto:example@gmail.com',
					icon: FaMailBulk,
				},
				{
					type: ContactsType.viber,
					text: '+375 (33) 000 00 00',
					value: 'viber://chat?number=%2B375291792329',
					icon: FaViber,
				},
				{
					type: ContactsType.tg,
					text: '+375 (33) 000 00 00',
					value: 'https://telegram.me/dentPlusMessage',
					icon: FaTelegramPlane,
				},
			],
		},
		{
			city: CityType.rogochev,
			coordinates: {
				lng: 30.051943,
				lat: 53.08132,
			},
			workTime: [
				{
					days: 'Пн-Пт',
					time: '07:00 - 19:00',
				},
				{
					days: 'Сб',
					time: '08:00 - 13:00',
				},
				{
					days: 'Вс',
					time: 'выходной',
				},
			],
			contacts: [
				{
					type: ContactsType.tel,
					text: '+375 (33) 999 99 99',
					value: 'tel:+375339999999',
					icon: FaPhone,
				},
				{
					type: ContactsType.email,
					text: 'example123@gmail.com',
					value: 'mailto:example123@gmail.com',
					icon: FaMailBulk,
				},
				{
					type: ContactsType.viber,
					text: '+375 (33) 888 88 88',
					value: 'viber://chat?number=%2B375338888888',
					icon: FaViber,
				},
				{
					type: ContactsType.tg,
					text: '+375 (33) 777 77 77',
					value: 'https://telegram.me/dentPlusMessage',
					icon: FaTelegramPlane,
				},
			],
		},
	],
}
