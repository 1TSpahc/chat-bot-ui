import { Stack, Typography, TextField, Button } from '@mui/material'

import { useState } from 'react'
import { useZustandFlowStore } from '../hooks/useZustandFlowStore'
import { toast } from 'sonner'
import { Notification } from './Notification'

export function CreateFlow () {
  const [flowName, setFlowName] = useState('')
  const { updateFlowFunction, updateFlowIsCreatedFunction } = useZustandFlowStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlowName(event.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (flowName.trim() === '') return

    console.log('d')

    updateFlowFunction({ name: flowName })
    updateFlowIsCreatedFunction(true)
    toast.success('Flujo creado correctamente')
  }

  return (
    <Stack direction='column' justifyContent='center' spacing={3}>
      <Typography variant='h5' textAlign='center'>
        Crear flujo
      </Typography>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <TextField
          id='outlined-basic'
          label='Nombre del flujo'
          variant='outlined'
          style={{ width: 300, margin: 'auto' }}
          onChange={handleChange}
          value={flowName}
        />
        <Button
          variant='outlined'
          type='submit'
          color='primary'
          sx={{ width: 'max-content', margin: 'auto' }}
        >
          Guardar
        </Button>

      </form>

      <Notification position='bottom-center' />
    </Stack>
  )
}
