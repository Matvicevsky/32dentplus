import { MdConstruction, MdCreate } from 'react-icons/md'

export const HEADER_ITEM_LIST = [
	{
		title: 'Title1',
		href: '/',
		subItems: [
			{ title: 'sub 1', href: '/sub1' },
			{ title: 'sub 1/2', href: '/sub1.2' },
			{
				title: 'sub 1/3',
				href: '/sub1.3',
				subItems: [
					{ title: 'sub 1/3/1', href: '/sub1.3.1' },
					{ title: 'sub 1/3/2', href: '/sub1.3.2' },
					{ title: 'sub 1/3/3', href: '/sub1.3.3' },
					{ title: 'sub 1/3/4', href: '/sub1.3.4' },
				],
			},
		],
	},
	{ title: 'Title2', href: '/2' },
	{ title: 'Title3', href: '/3' },
	{
		title: 'Title4',
		href: '/4',
		subItems: [
			{ title: 'sub 4', href: '/sub1' },
			{ title: 'sub 4/2', href: '/sub4.2' },
			{ title: 'sub 4/3', href: '/sub4.3' },
		],
	},
	{ title: 'Title5', href: '/5' },
]

export const POPULAR_SERVICES = {
	title: 'Lorem ipsum dolor sit amet.',
	subTitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, animi',
	description:
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam illum officiis hic quo aliquam, ex sint tempora et quae perferendis, adipisci necessitatibus tempore nesciunt asperiores aut. Quisquam non veritatis optio.',
	carts: [
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdConstruction,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdCreate,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdConstruction,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdCreate,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdConstruction,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdCreate,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdConstruction,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdCreate,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdConstruction,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
		{
			title: 'Lorem, ipsum.',
			href: '/',
			icon: MdCreate,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		},
	],
}

export const SLIDER_CONTENT: {
	title: string
	subTitle: string
	image: string
	button: {
		title: string
		href?: string
	}
}[] = [
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: '/slider/1.jpg',
		button: {
			title: 'Lorem, ipsum.',
		},
	},
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: '/slider/2.jpg',
		button: {
			title: 'Lorem, ipsum.',
		},
	},
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: '/slider/3.jpg',
		button: {
			title: 'Lorem, ipsum.',
		},
	},
	{
		title: 'Lorem ipsum dolor sit amet.',
		subTitle:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum dignissimos, quibusdam ipsum nesciunt officia.',
		image: '/slider/4.jpg',
		button: {
			title: 'Lorem, ipsum.',
		},
	},
]
