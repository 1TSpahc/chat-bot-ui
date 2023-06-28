import { Button, Modal, Stack, Tooltip, Typography } from '@mui/material'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'

import { useState } from 'react'
import { LoginSteps } from './LoginSteps'

export function Help () {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Tooltip title='¿Cómo se inicia sesión?' arrow>
        <Button
          variant='outlined'
          onClick={handleOpen}
        >
          <QuestionMarkIcon />
        </Button>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Stack
          direction='column'
          spacing={2}
          alignItems='center'
          justifyContent='center'
          bgcolor='#fff'
          width='max-content'
          margin='auto'
          padding={2}
          borderRadius={2}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            ¿Cómo se inicia sesión?
          </Typography>

          <Stack direction='column' spacing={2}>
            <Typography id='modal-modal-description' variant='body1' component='p'>
              Para iniciar sesión debes seguir estos pasos.
            </Typography>

            <LoginSteps />
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}
