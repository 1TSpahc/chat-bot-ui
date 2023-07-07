import { useDarkModeStore } from '../store/darkModeStore'

export function useZustandDarkModeStore () {
  const mode = useDarkModeStore((state) => state.mode)
  const isActive = useDarkModeStore((state) => state.isActive)
  const updateMode = useDarkModeStore((state) => state.updateIsDark)
  const updateIsActive = useDarkModeStore((state) => state.updateIsActive)

  return {
    mode,
    isActive,
    updateMode,
    updateIsActive
  }
}
