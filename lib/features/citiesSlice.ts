import { CityType } from '@/types/city'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getCities } from '../get-cities-data'
import { setCookie } from 'cookies-next'

type ContactsType = Omit<
	CityType,
	'icon' | 'logo' | 'tour' | 'coordinates' | 'phone'
>

export interface CitiesI {
	cities: CityType[]
	contacts: ContactsType[]
	selectedCity: CityType | null
	loading: boolean
}

const initialState: CitiesI = {
	cities: [],
	contacts: [],
	selectedCity: null,
	loading: false,
}

export const fetchCities = createAsyncThunk(
	'cities/getAllCities',
	async thunkApi => {
		const response = await getCities()
		return response || []
	}
)

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		onSelectCity: (state, action: PayloadAction<string>) => {
			const city = state.cities.find(
				item => item.city.toLowerCase() === action.payload.toLowerCase()
			)!
			state.selectedCity = { ...city }
			localStorage.setItem('city', city.city)
			setCookie('city', city.city)
		},
	},

	extraReducers: builder => {
		builder.addCase(fetchCities.fulfilled, (state, action) => {
			state.loading = false
			state.cities = [...action.payload]
			state.contacts = action.payload.map(i => ({
				id: i.id,
				city: i.city,
				contacts: i.contacts,
				address: i.address,
				workTime: i.workTime,
			}))
			const savedCityLocal = localStorage.getItem('city')
			if (savedCityLocal) {
				const city = action.payload.find(
					item => item.city.toLowerCase() === savedCityLocal.toLowerCase()
				)!
				setCookie('city', city.city)
				state.selectedCity = { ...city }
			} else {
				localStorage.setItem('city', action.payload[0].city)
				setCookie('city', action.payload[0].city)
			}
		}),
			builder.addCase(fetchCities.pending, (state, action) => {
				state.loading = true
			})
	},
})

const { actions, reducer } = citiesSlice

export const { onSelectCity } = actions

export default reducer
