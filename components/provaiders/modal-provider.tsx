'use client'

import { useEffect, useState } from 'react'

import { SubscribeModal } from '@/components/modals/subscribe-modal'
import { ServiceModal } from '@/components/modals/service-modal'

export default function ModalProvider() {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<>
			<SubscribeModal />
			<ServiceModal />
		</>
	)
}
