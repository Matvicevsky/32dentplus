import React, { memo } from 'react'

const SectionWrapper = ({
	children,
	id,
}: {
	children: React.ReactNode
	id?: string
}) => {
	return (
		<section className='pt-14 lg:pt-[12.7vw] mx-auto w-full' id={id}>
			{children}
		</section>
	)
}

export default memo(SectionWrapper)
