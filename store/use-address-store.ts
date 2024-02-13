import { IconType } from 'react-icons'
import {
	FaInstagram,
	FaMailBulk,
	FaPhone,
	FaTelegramPlane,
	FaViber,
} from 'react-icons/fa'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Address {
	id: string
	city: string
	icon: string
	logo: string
	tour?: string
	coordinates: {
		lng: number
		lat: number
	}
	address: {
		title: string
		href: string
	}
	workTime: {
		days: string
		time: string
	}[]
	phone: {
		title: string
		value: string
	}
	contacts: {
		text: string
		value: string
		icon: IconType
	}[]
	socials: {
		value: string
		icon: IconType
	}[]
}

interface State {
	addresses: Address[]
	selectedAddress: Address
}

interface Actions {
	onSelectAddress: (city: string) => void
}

const INITIAL_STATE: State = {
	selectedAddress: {
		id: 'minsk',
		logo: 'logo_v4_g.png',
		city: 'Минск',
		icon: 'city/minsk.png',
		coordinates: {
			lng: 27.535948,
			lat: 53.91483,
		},
		address: {
			title: 'город Минск, проспект Победителей, дом 41',
			href: 'https://yandex.by/maps/org/32dent_/62123372700/?ll=27.535996%2C53.914871&mode=search&sctx=ZAAAAAgBEAAaKAoSCZwZ%2FWg4iTtAESh%2F944a9UpAEhIJeekmMQisTD8RrmcIxyx7Mj8iBgABAgMEBSgKOABA9Z4GSABqAnVhnQHNzEw9oAEAqAEAvQHG%2FiwwwgEGnOHdtucB6gEA8gEA%2BAEAggIGMzJkZW50igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=27.535996%2C53.914871&sspn=0.015633%2C0.005045&text=32%D0%B2%D1%83%D1%82%D0%B5&z=16.53',
		},
		workTime: [
			{
				days: 'Пн-Пт',
				time: '08:00 - 20:00',
			},
			{
				days: 'Сб',
				time: '10:00 - 17:00',
			},
			{
				days: 'Вс',
				time: 'выходной',
			},
		],
		phone: {
			title: '+375 (29) 323 33 88',
			value: 'tel:+375293233388',
		},
		contacts: [
			{
				text: '+375 (29) 323 33 88',
				value: 'tel:+375293233388',
				icon: FaPhone,
			},

			{
				text: '+375 (29) 323 33 88',
				value: 'viber://chat?number=%2B375293233388',
				icon: FaViber,
			},
			{
				text: '+375 (29) 323 33 88',
				value: 'https://telegram.me/Dent32plus',
				icon: FaTelegramPlane,
			},
			{
				text: '32dentplus@gmail.com',
				value: 'mailto:32dentplus@gmail.com',
				icon: FaMailBulk,
			},
		],
		socials: [
			{
				value: 'viber://chat?number=%2B375293233388',
				icon: FaViber,
			},
			{
				value: 'https://telegram.me/Dent32plus',
				icon: FaTelegramPlane,
			},
			{
				value: 'https://www.instagram.com/32_dent_plus',
				icon: FaInstagram,
			},
		],
	},
	addresses: [
		{
			id: 'minsk',
			logo: 'logo_v4_g.png',
			city: 'Минск',
			icon: 'city/minsk.png',
			coordinates: {
				lng: 27.535948,
				lat: 53.91483,
			},
			address: {
				title: 'город Минск, проспект Победителей, дом 41',
				href: 'https://yandex.by/maps/org/32dent_/62123372700/?ll=27.535996%2C53.914871&mode=search&sctx=ZAAAAAgBEAAaKAoSCZwZ%2FWg4iTtAESh%2F944a9UpAEhIJeekmMQisTD8RrmcIxyx7Mj8iBgABAgMEBSgKOABA9Z4GSABqAnVhnQHNzEw9oAEAqAEAvQHG%2FiwwwgEGnOHdtucB6gEA8gEA%2BAEAggIGMzJkZW50igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=27.535996%2C53.914871&sspn=0.015633%2C0.005045&text=32%D0%B2%D1%83%D1%82%D0%B5&z=16.53',
			},
			workTime: [
				{
					days: 'Пн-Пт',
					time: '08:00 - 20:00',
				},
				{
					days: 'Сб',
					time: '10:00 - 17:00',
				},
				{
					days: 'Вс',
					time: 'выходной',
				},
			],
			phone: {
				title: '+375 (29) 323 33 88',
				value: 'tel:+375293233388',
			},
			contacts: [
				{
					text: '+375 (29) 323 33 88',
					value: 'tel:+375293233388',
					icon: FaPhone,
				},
				{
					text: '+375 (29) 323 33 88',
					value: 'viber://chat?number=%2B375293233388',
					icon: FaViber,
				},
				{
					text: '+375 (29) 323 33 88',
					value: 'https://telegram.me/Dent32plus',
					icon: FaTelegramPlane,
				},
				{
					text: '32dentplus@gmail.com',
					value: 'mailto:32dentplus@gmail.com',
					icon: FaMailBulk,
				},
			],
			socials: [
				{
					value: 'viber://chat?number=%2B375293233388',
					icon: FaViber,
				},
				{
					value: 'https://telegram.me/Dent32plus',
					icon: FaTelegramPlane,
				},
				{
					value: 'https://www.instagram.com/32_dent_plus',
					icon: FaInstagram,
				},
			],
		},
		{
			id: 'rogachev',
			city: 'Рогачев',
			logo: '32dent_logo.png',
			icon: 'city/rogachev.png',
			tour: 'https://my.matterhub.ru/8/DzGcqFozpPq/',
			coordinates: {
				lng: 30.051943,
				lat: 53.08132,
			},
			address: {
				title: 'город Рогачев, ул. Ленина, дом 60',
				href: 'https://yandex.by/maps/org/32dent/1679633446/?ll=30.051943%2C53.081320&mode=search&sctx=ZAAAAAgBEAAaKAoSCZwZ%2FWg4iTtAESh%2F944a9UpAEhIJeekmMQisTD8RrmcIxyx7Mj8iBgABAgMEBSgKOABA9Z4GSABqAnVhnQHNzEw9oAEAqAEAvQHG%2FiwwwgEGnOHdtucB6gEA8gEA%2BAEAggIGMzJkZW50igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=30.051943%2C53.081320&sspn=0.015633%2C0.005145&text=32%D0%B2%D1%83%D1%82%D0%B5&z=16.53',
			},
			workTime: [
				{
					days: 'Пн-Пт',
					time: '08:00 - 20:00',
				},
				{
					days: 'Сб',
					time: '09:00 - 14:00',
				},
				{
					days: 'Вс',
					time: 'выходной',
				},
			],
			phone: {
				title: '+375 (44) 744 40 33',
				value: 'tel:+375447444033',
			},
			contacts: [
				{
					text: '+375 (2339) 2 77 70',
					value: 'tel:+375233927770',
					icon: FaPhone,
				},
				{
					text: '+375 (44) 744 40 33',
					value: 'tel:+375447444033',
					icon: FaPhone,
				},
				{
					text: '+375 (44) 744 40 33',
					value: 'viber://chat?number=%2B375447444033',
					icon: FaViber,
				},
				{
					text: '+375 (44) 744 40 33',
					value: 'https://telegram.me/Dent32plus',
					icon: FaTelegramPlane,
				},
				{
					text: '32dent@tut.by',
					value: 'mailto:32dent@tut.by',
					icon: FaMailBulk,
				},
			],
			socials: [
				{
					value: 'viber://chat?number=%2B375447444033',
					icon: FaViber,
				},
				{
					value: 'https://telegram.me/Dent32plus',
					icon: FaTelegramPlane,
				},
				{
					value: 'https://www.instagram.com/32_dent_stom',
					icon: FaInstagram,
				},
			],
		},
	],
}

export const useAddressStore = create<State & Actions>((set, get) => ({
	addresses: INITIAL_STATE.addresses,
	selectedAddress: INITIAL_STATE.selectedAddress,
	onSelectAddress: (city: string) => {
		const currentAddress = get().addresses.find(item => item.city === city)

		if (!currentAddress) {
			return
		}

		set(() => ({
			selectedAddress: currentAddress,
		}))
	},
}))
