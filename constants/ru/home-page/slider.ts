const config = require('../../../next.config.js')

export const SLIDER_CONTENT: {
	title: string
	subTitle: string
	image: string
}[] = [
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: `${config.basePath}/slider/1.jpg`,
	},
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: `${config.basePath}/slider/2.jpg`,
	},
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: `${config.basePath}/slider/3.jpg`,
	},
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: `${config.basePath}/slider/4.jpg`,
	},
]
