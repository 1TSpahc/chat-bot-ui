import { Autocomplete, Stack, TextField, Typography } from '@mui/material'
import { useZustandFlowStore } from '../hooks/useZustandFlowStore'

export function AddAction () {
  const { flow } = useZustandFlowStore()
  const { name } = flow

  return (
    <>
      <Stack>
        <Typography variant='h5' textAlign='center'>
          Agregar accion
        </Typography>

        <form>
          <Autocomplete
            id='free-solo-demo'
            freeSolo
            options={[name]}
            renderInput={(params) => <TextField {...params} label='Selecciona tu flujo' />}
          />
          <TextField label='Elije la palabra que activara al bot' />
        </form>

      </Stack>
    </>
  )
}
