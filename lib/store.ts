import { configureStore, Tuple } from '@reduxjs/toolkit'
import citiesReducer from './features/citiesSlice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			cities: citiesReducer,
		},
		devTools: process.env.NODE_ENV !== 'production',
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
