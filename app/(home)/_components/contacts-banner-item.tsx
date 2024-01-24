import { IconType } from 'react-icons'
import { ContactsType } from './contacts-banner'
import Link from 'next/link'

type ContactsBannerItemProps = {
	contacts: {
		type: ContactsType
		text: string
		value: string
		icon: IconType
	}[]
	workTime: {
		days: string
		time: string
	}[]
}

export const ContactsBannerItem = ({
	contacts,
	workTime,
}: ContactsBannerItemProps) => {
	return (
		<div>
			<ul className='mb-8'>
				{contacts.map(contact => {
					return (
						<li
							className='flex pb-1 md:pb-4'
							key={contact.value + contact.type}
						>
							<Link
								href={contact.value}
								target={contact.type === ContactsType.tg ? '_blank' : ''}
								className='flex gap-1 relative after:transition-all after:duration-500 after:ease-in-out after:content-[""] after:w-0 after:h-[1px] after:bg-primary after:absolute after:bottom-0 after:left-0 hover:after:w-full text-lg md:text-[1.6vw] font-normal'
							>
								<contact.icon size={24} className='mr-2' />
								{contact.text}
							</Link>
						</li>
					)
				})}
			</ul>
			<ul>
				{workTime.map((item, index) => {
					return (
						<li className='flex text-xl pb-1 md:pb-2' key={index}>
							{item.days} {item.time}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
