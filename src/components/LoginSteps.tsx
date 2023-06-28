import { Stack, Typography } from '@mui/material'
import { SettingsIcon } from './Icons'

export function LoginSteps () {
  return (
    <Stack direction='column' spacing={1}>
      <Typography>1. Abre whatsapp en tu celular.</Typography>
      <Typography display='flex' gap={1}>2. Click en los <SettingsIcon /> 3 puntos y selecciona dispositivos vinculados.</Typography>
      <Typography>3. Click en vincular un dispositivo.</Typography>
      <Typography>4. Escanee el código qr.</Typography>

      <img src='https://media.taringa.net/knn/fit:550/Z3M6Ly9rbjMvYzQyMjEyNzViOWU0YzI0NGI1NmFiMWQ2YTEwNTI0NWQuZ2lm' alt='tutorial' />
    </Stack>
  )
}
