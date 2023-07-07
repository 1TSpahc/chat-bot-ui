import { create } from 'zustand'

type ModeValues = 'light' | 'dark'

interface useDarkModeStoreProps {
  mode: ModeValues
  isActive: boolean
  updateIsDark: (mode: ModeValues) => void
  updateIsActive: (isActive: boolean) => void
}

export const useDarkModeStore = create<useDarkModeStoreProps>((set) => ({
  mode: 'light',
  isActive: false,
  updateIsDark: (mode: ModeValues) => set({ mode }),
  updateIsActive: (isActive: boolean) => set({ isActive })
}))
