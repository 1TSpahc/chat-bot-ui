import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton, Stack } from '@mui/material'

import { useZustandDarkModeStore } from '../hooks/useZustandDarkModeStore'

export function DarkModeButton () {
  const { isActive, updateMode, updateIsActive } = useZustandDarkModeStore()

  const handleClick = () => {
    if (!isActive) {
      updateMode('dark')
      updateIsActive(true)
      return
    }

    updateMode('light')
    updateIsActive(false)
  }

  return (
    <Stack
      sx={{ p: 2, borderRadius: '100%', cursor: 'pointer' }}
      position='fixed'
      bottom={0}
      right={0}
      onClick={handleClick}
    >
      <IconButton>
        {
        isActive ? <Brightness7Icon /> : <Brightness4Icon />
      }
      </IconButton>
    </Stack>
  )
}
