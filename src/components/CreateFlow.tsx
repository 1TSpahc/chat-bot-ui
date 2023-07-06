import { Stack, Typography, TextField, Button } from '@mui/material'

import { useState } from 'react'
import { useZustandFlowStore } from '../hooks/useZustandFlowStore'

export function CreateFlow () {
  const [flowName, setFlowName] = useState('')
  const { updateFlowFunction, updateFlowIsCreatedFunction } = useZustandFlowStore()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlowName(event.target.value)
  }

  const handleClick = () => {
    updateFlowFunction({ name: flowName })
    updateFlowIsCreatedFunction(true)
  }

  return (
    <Stack direction='column' justifyContent='center' spacing={5}>
      <Typography variant='h5' textAlign='center' padding={2}>
        Crear flujo
      </Typography>
      <TextField
        id='outlined-basic'
        label='Nombre del flujo'
        variant='outlined'
        style={{ width: 300, margin: 'auto' }}
        onChange={handleChange}
        value={flowName}
      />``
      <Button onClick={handleClick}>Guardar</Button>
    </Stack>
  )
}
