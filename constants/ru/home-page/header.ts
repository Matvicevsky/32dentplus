export const HEADER_ITEM_LIST: {
	title: string
	href: string
}[] = [
	{
		title: 'Услуги',
		href: '/#services',
	},
	{
		title: 'Клиники',
		href: '/#clinics',
	},
	{
		title: 'Специалисты',
		href: '/doctors',
	},
	{ title: 'Контакты', href: '/#footer' },
]

export const HEADER_ADDRESSES_LIST: {
	address: {
		title: string
		href: string
	}
	workTime: string
	phone: {
		title: string
		value: string
	}
}[] = [
	{
		address: {
			title: 'город Минск, проспект Победителей, дом 41',
			href: 'https://yandex.by/maps/org/32dent_/62123372700/?ll=27.535996%2C53.914871&mode=search&sctx=ZAAAAAgBEAAaKAoSCZwZ%2FWg4iTtAESh%2F944a9UpAEhIJeekmMQisTD8RrmcIxyx7Mj8iBgABAgMEBSgKOABA9Z4GSABqAnVhnQHNzEw9oAEAqAEAvQHG%2FiwwwgEGnOHdtucB6gEA8gEA%2BAEAggIGMzJkZW50igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=27.535996%2C53.914871&sspn=0.015633%2C0.005045&text=32%D0%B2%D1%83%D1%82%D0%B5&z=16.53',
		},
		workTime: 'Пн-Пт: 8.00 - 20.00',
		phone: {
			title: '+375 (44) 111-11-11',
			value: 'tel:+375 (44) 111-11-11',
		},
	},
	{
		address: {
			title: 'город Рогачев, ул. Ленина, дом 60',
			href: 'https://yandex.by/maps/org/32dent/1679633446/?ll=30.051943%2C53.081320&mode=search&sctx=ZAAAAAgBEAAaKAoSCZwZ%2FWg4iTtAESh%2F944a9UpAEhIJeekmMQisTD8RrmcIxyx7Mj8iBgABAgMEBSgKOABA9Z4GSABqAnVhnQHNzEw9oAEAqAEAvQHG%2FiwwwgEGnOHdtucB6gEA8gEA%2BAEAggIGMzJkZW50igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=30.051943%2C53.081320&sspn=0.015633%2C0.005145&text=32%D0%B2%D1%83%D1%82%D0%B5&z=16.53',
		},
		workTime: 'Пн-Пт: 8.00 - 20.00',
		phone: {
			title: '+375 (44) 000-00-00',
			value: 'tel:+375 (44) 000-00-00',
		},
	},
]
