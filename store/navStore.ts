// store/navStore.ts
import { create } from 'zustand'

interface NavState {
  isNavbarVisible: boolean
  setNavbarVisibility: (visible: boolean) => void
}

export const useNavStore = create<NavState>((set) => ({
  isNavbarVisible: true,
  setNavbarVisibility: (visible) => set({ isNavbarVisible: visible })
}))