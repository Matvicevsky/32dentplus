import { builder } from '@builder.io/sdk'
import { normalizeNavLink } from './normalize'
import { NavLinkType } from '@/types/header'

export const getHeaderData = async (): Promise<NavLinkType[]> => {
	const defaultNavLinks = [
		{
			title: 'Услуги',
			href: '/#services',
		},
		{
			title: 'Как нас найти?',
			href: '/#clinics',
		},
		{
			title: 'Специалисты',
			href: '/doctors',
		},
		{
			title: 'Записаться',
			href: '/#footer',
		},
	]
	try {
		const response = await builder.get('header-navigation-links').toPromise()
		if (!response.data) {
			return defaultNavLinks
		}

		return normalizeNavLink(response.data)
	} catch (error) {
		console.error('GET_HEADER: ', error)
		return defaultNavLinks
	}
}
