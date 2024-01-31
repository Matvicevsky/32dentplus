'use client'

import {
	YMaps,
	Map,
	Placemark,
	ZoomControl,
	GeolocationControl,
	FullscreenControl,
} from '@pbe/react-yandex-maps'
import { useAddressStore } from '@/store/use-address-store'
import { useMemo } from 'react'

const YMap = () => {
	const { selectedAddress } = useAddressStore()

	const center = useMemo(
		() => [selectedAddress.coordinates.lat, selectedAddress.coordinates.lng],
		[selectedAddress]
	)

	return (
		<YMaps
			query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_KEY, mode: 'release' }}
		>
			<Map
				width='100%'
				height='400px'
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
		</YMaps>
	)
}

export default YMap
