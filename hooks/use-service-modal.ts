import { create } from 'zustand'
type ServiceType = {
	name: string
	description: string
	icon: string
	prices: {
		title: string
		value: string
	}[]
}

type ServiceModalStore = {
	isOpen: boolean
	service: ServiceType | null
	onOpen: (item: ServiceType) => void
	onClose: () => void
}

export const useServiceModal = create<ServiceModalStore>(set => ({
	isOpen: false,
	service: null,
	onOpen: (item: ServiceType) => set({ isOpen: true, service: item }),
	onClose: () => set({ isOpen: false }),
}))
