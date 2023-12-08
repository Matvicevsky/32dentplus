import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
	return (
		<Link href='/'>
			<div className='bg-secondary hover:opacity-75 transition items-center gap-x-2 hidden md:flex p-2'>
				<Image
					src='/logo_v4.png'
					alt='logo'
					height={56}
					width={220}
					className='text-secondary'
				/>
			</div>
		</Link>
	)
}
