import { Stack, Typography } from '@mui/material'
import { Help } from '../components/Help'
import { useEffect, useState } from 'react'
import { QrCode } from '../components/QrCode'
import { useNavigate } from 'react-router-dom'

import { toast } from 'sonner'
import { Notification } from '../components/Notification'

export function Login () {
  const [qrCode, setQrCode] = useState<null | string>(null)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  if (isLogin) {
    setTimeout(() => {
      navigate('/chatbot/inicio')
    }, 5000)
  }

  useEffect(() => {
    setTimeout(() => {
      setQrCode('https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png')
    }, 5000)

    setTimeout(() => {
      setIsLogin(true)
      toast.success('Sesion iniciada')
    }, 10000)
  }, [])

  return (
    <>
      <Stack height='100vh' direction='column' justifyContent='center' alignItems='center' spacing={2}>
        <QrCode qrCode={qrCode} />
        <Typography variant='h5'>Escanea el codigo qr</Typography>
        <Help />
      </Stack>
      <Notification position='bottom-center' />
    </>
  )
}
