'use client'

import {
	Map,
	Placemark,
	ZoomControl,
	GeolocationControl,
	FullscreenControl,
	useYMaps,
} from '@pbe/react-yandex-maps'
import { useMemo } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

const YMap = () => {
	const { selectedCity, loading } = useSelector(
		(state: RootState) => state.cities
	)
	const ymaps = useYMaps()

	const center = useMemo(
		() => [selectedCity?.coordinates.lat!, selectedCity?.coordinates.lng!],
		[selectedCity]
	)

	if (!ymaps || loading) {
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
