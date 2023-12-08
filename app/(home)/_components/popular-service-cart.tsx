import Link from 'next/link'
import { ServiceCartType } from './popular-services'

export const PopularServiceCart = ({ cart }: { cart: ServiceCartType }) => {
	const { description, title, icon: Icon, href } = cart

	return (
		<Link
			href={href}
			className='flex flex-col flex-wrap w-56 space-y-5 p-5 hover:text-secondary hover:bg-white/10 rounded-md'
		>
			<Icon size={46} />
			<h3 className='uppercase text-sm'>{title}</h3>
			<p className='text-sm'>{description}</p>
		</Link>
	)
}
