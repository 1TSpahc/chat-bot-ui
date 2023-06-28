import { Skeleton } from '@mui/material'

export function QrCode ({ qrCode }: { qrCode: null | string }) {
  return (
    <div style={{ width: 300, height: 300 }}>
      {
        qrCode
          ? (<img src={qrCode} alt='qrImage' style={{ width: '100%' }} />)
          : (<Skeleton
              sx={{ bgcolor: 'white.300' }}
              variant='rectangular'
              width='100%'
              height='100%'
             />)
      }
    </div>
  )
}
