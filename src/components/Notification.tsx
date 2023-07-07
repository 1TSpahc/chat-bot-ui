import { useZustandDarkModeStore } from '../hooks/useZustandDarkModeStore'
import { Toaster } from 'sonner'
import { ToasterProps } from '../types/sonner'

export function Notification (props: ToasterProps) {
  const { isActive } = useZustandDarkModeStore()

  if (isActive) {
    return (
      <Toaster theme='dark' {...props} />
    )
  }

  return (
    <Toaster theme='light' {...props} />
  )
}
