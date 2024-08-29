'use client'
import { AppStore, makeStore } from '@/lib/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { fetchCities } from '@/lib/features/citiesSlice'

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const storeRef = useRef<AppStore | null>(null)
	if (!storeRef.current) {
		storeRef.current = makeStore()
		storeRef.current.dispatch(fetchCities())
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
