const config = require('../../../next.config.js')

export const SLIDER_CONTENT: {
	city: string
	slides: {
		title: string
		subTitle: string
		image: string
	}[]
}[] = [
	{
		city: 'минск',
		slides: [
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/slider/minsk_1.jpg`,
			},
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/slider/minsk_2.jpg`,
			},
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/slider/minsk_3.jpg`,
			},
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/slider/minsk_5.jpg`,
			},
		],
	},
	{
		city: 'рогачев',
		slides: [
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/video_2024-02-05_21-40-12.mp4`,
			},
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/slider/rogachev_1.jpg`,
			},
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/slider/3.jpg`,
			},
			{
				title: '',
				subTitle: '',
				image: `${config.basePath}/slider/4.jpg`,
			},
		],
	},
]
