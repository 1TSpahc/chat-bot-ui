import { Button, Stack, Typography } from '@mui/material'
import { RobotIcon } from './Icons'

export function Banner () {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center' spacing={2} height='100vh'>
      <RobotIcon style={{ width: 200 }} />
      <Typography variant='h3'>Chatbot Fácil</Typography>
      <Typography variant='body1' textAlign='center'>
        ¡Bienvenido a Chatbot Fácil! Es una innovadora aplicación web diseñada para que aproveches al máximo tu número de WhatsApp convirtiéndolo en un eficiente bot de respuestas automáticas. Con esta herramienta, podrás configurar mensajes predefinidos que se enviarán automáticamente cuando alguien te envíe un mensaje.
      </Typography>
      <Button variant='contained' size='large'>Empezar</Button>
    </Stack>
  )
}
