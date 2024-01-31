'use client'

import {
	YMaps,
	Map,
	Placemark,
	ZoomControl,
	GeolocationControl,
	FullscreenControl,
	useYMaps,
} from '@pbe/react-yandex-maps'
import { useAddressStore } from '@/store/use-address-store'
import { useMemo } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const YMap = () => {
	const { selectedAddress } = useAddressStore()
	const ymaps = useYMaps()

	const center = useMemo(
		() => [selectedAddress.coordinates.lat, selectedAddress.coordinates.lng],
		[selectedAddress]
	)

	if (!ymaps) {
		return <YMap.Skeleton />
	}

	return (
		<Map
			width='100%'
			height='384px'
			state={{
				center,
				zoom: 12,
			}}
		>
			<Placemark
				geometry={center}
				options={{
					iconOffset: [-20, -20],
					iconLayout: 'default#image',
					iconImageHref: 'marker.png',
					iconImageSize: [60, 60],
				}}
			/>
			<ZoomControl options={{ position: { right: 10, top: 50 } }} />
			<GeolocationControl options={{ float: 'right' }} />
			<FullscreenControl options={{ float: 'left' }} />
		</Map>
	)
}

export default YMap

YMap.Skeleton = function YMapSkeleton() {
	return (
		<div className='relative w-full h-96'>
			<Skeleton className='w-ful h-96' />
		</div>
	)
}
