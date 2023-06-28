import { Alert, AlertTitle, Grow } from '@mui/material'

interface HandleAlertProps {
  condition: boolean
  variant: 'success' | 'error'
  title: string
  message: string
}

export function HandleAlert ({ condition, variant, title, message }: HandleAlertProps) {
  return (
    <>
      {
        condition && (
          <Grow in={condition}>
            <Alert
              severity={variant}
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px'
              }}
            >
              <AlertTitle>{title}</AlertTitle>
              {message}
            </Alert>
          </Grow>
        )
      }
    </>
  )
}
