import { useZustandFlowStore } from '../hooks/useZustandFlowStore'
import { CreateFlow } from './CreateFlow'
import { AddAction } from './AddAction'
import { AddAnswer } from './AddAnswer'

export function Create () {
  const { isInCreateMode, isInAddActionMode, isInAddAnswerMode } = useZustandFlowStore()

  return (
    <>
      {isInCreateMode && <CreateFlow />}
      {isInAddActionMode && <AddAction />}
      {isInAddAnswerMode && <AddAnswer />}
    </>
  )
}
