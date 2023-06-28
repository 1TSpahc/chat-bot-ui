import { Container, Stack, Typography } from '@mui/material'
import { Help } from '../components/Help'
import { useEffect, useState } from 'react'
import { QrCode } from '../components/QrCode'
import { HandleAlert } from '../components/HandleAlerts'

export function Login () {
  const [qrCode, setQrCode] = useState<null | string>(null)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setQrCode('https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png')
    }, 5000)

    setTimeout(() => {
      setIsLogin(true)
    }, 10000)
  }, [])

  return (
    <Container>
      <Stack height='100vh' direction='column' justifyContent='center' alignItems='center' spacing={2}>
        <QrCode qrCode={qrCode} />
        <Typography variant='h5'>Escanea el codigo qr</Typography>
        <Help />
        <HandleAlert
          condition={isLogin}
          variant='success'
          title='Sesion Iniciada'
          message='Ahora te redireccionaremos para que puedas configurar tu chatBot'
        />
      </Stack>
    </Container>
  )
}
