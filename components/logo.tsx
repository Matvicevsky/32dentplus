import Link from 'next/link'
import Image from 'next/image'

const config = require('../next.config.js')

export const Logo = () => {
	return (
		<Link href='/'>
			<div className='hover:opacity-75 transition items-center flex mr-16'>
				<Image
					src={`${config.basePath}/logo_v4_g.png`}
					alt='logo'
					height={75}
					width={130}
				/>
			</div>
		</Link>
	)
}
