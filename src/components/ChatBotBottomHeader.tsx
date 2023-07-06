import Button from '@mui/material/Button'
import { useZustandFlowStore } from '../hooks/useZustandFlowStore'

export function ChatBotBottomHeader () {
  const { isFlowCreated, updateIsToCreateMode, updateIsToAddAnswerMode, updateIsToAddActionMode } = useZustandFlowStore()

  const handleActionClick = () => {
    if (!isFlowCreated) return

    updateIsToAddActionMode(true)
    updateIsToCreateMode(false)
    updateIsToAddAnswerMode(false)
  }

  const handleAnswerClick = () => {
    if (!isFlowCreated) return

    updateIsToAddAnswerMode(true)
    updateIsToCreateMode(false)
    updateIsToAddActionMode(false)
  }

  return (
    <header style={{
      padding: '0 20px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      justifyContent: 'start',
      gap: '10px',
      alignItems: 'center'

    }}
    >
      <Button variant='outlined' disabled={!isFlowCreated} onClick={handleActionClick}>Agregar accion</Button>
      <Button variant='outlined' disabled={!isFlowCreated} onClick={handleAnswerClick}>Agregar respuesta</Button>
    </header>
  )
}
