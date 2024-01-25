export const PROMOTIONS: {
	title: string
	img: string
	services: string[]
	condition?: string
}[] = [
	{
		title: 'Бесплатная первичная консультация',
		img: '/promotions/1.png',
		services: [
			'Проведем осмотр полости рта',
			'Обсудим с Вами основные жалобы и пожелания',
			'При необходимости сделаем рентген, а также составим план лечения',
		],
		condition: 'акция действует при выборе процедуры лечения в нашей клинике',
	},
]
