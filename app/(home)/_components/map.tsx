'use client'

import { LngLat } from '@yandex/ymaps3-types'
import { type FC } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

import { MapPinIcon } from 'lucide-react'

const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify')
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM)
const {
	YMap,
	YMapDefaultSchemeLayer,
	YMapDefaultFeaturesLayer,
	YMapControls,
	YMapMarker,
} = reactify.module(ymaps3)

const { YMapZoomControl, YMapGeolocationControl } = reactify.module(
	await ymaps3.import('@yandex/ymaps3-controls@0.0.1')
)
const { YMapOpenMapsButton } = reactify.module(
	await ymaps3.import('@yandex/ymaps3-controls-extra')
)

interface MapProps {
	coordinates:
		| {
				lat: number
				lng: number
		  }
		| undefined
}

const Map: FC<MapProps> = ({ coordinates }) => {
	if (!coordinates) return null

	const location = { center: [coordinates.lng, coordinates.lat], zoom: 13 }

	return (
		<YMap location={location} className='w-full h-96 text-secondary'>
			<YMapControls position='right'>
				<YMapZoomControl />
				<YMapGeolocationControl />
			</YMapControls>
			<YMapControls position='bottom left'>
				<YMapOpenMapsButton />
			</YMapControls>

			<YMapDefaultSchemeLayer />
			<YMapDefaultFeaturesLayer />

			<YMapMarker coordinates={location.center as LngLat} zIndex={1}>
				<div className='relative'>
					<MapPinIcon
						className='text-rose-500 absolute bottom-0 -right-5'
						width={40}
						height={50}
					/>
				</div>
			</YMapMarker>
		</YMap>
	)
}

export default Map
