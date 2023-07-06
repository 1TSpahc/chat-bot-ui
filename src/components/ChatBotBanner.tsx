import { Link as ReactRouterLink } from 'react-router-dom'
import { Button, Stack, Typography, Link } from '@mui/material'
import { RobotIcon } from './Icons'

export function ChatBotBanner () {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center' spacing={2}>
      <RobotIcon style={{ width: 250 }} />
      <Typography variant='h4' textAlign='center'>Configuremos tu bot!</Typography>
      <Link component={ReactRouterLink} to='/chatbot/crear' underline='none'>
        <Button variant='outlined' color='primary'>Empezar</Button>
      </Link>
    </Stack>
  )
}
