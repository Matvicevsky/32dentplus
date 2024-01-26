'use client'

import React from 'react'

export type BreadcrumbItem = {
	link: string | null
	text: string
}

export type BreadcrumbsProps = {
	items: BreadcrumbItem[]
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
	const { items } = props

	return (
		<div className='text-primary text-sm'>
			{items.map(({ link, text }, i) => (
				<span key={link}>
					{link ? (
						<a href={link} className='break-all text-primary-2'>
							{text}
						</a>
					) : (
						<span className='font-normal'>{text}</span>
					)}
					{i < items.length - 1 ? <span className='px-2'>{'>'}</span> : null}
				</span>
			))}
		</div>
	)
}

export default Breadcrumbs
