import { useFlowStore } from '../store/flowStore'

export function useZustandFlowStore () {
  const isToCreate = useFlowStore((state) => state.isToCreate)
  const isToAddAction = useFlowStore((state) => state.isToAddAction)
  const isToAddAnswer = useFlowStore((state) => state.isToAddAnswer)
  const flowIsCreated = useFlowStore((state) => state.flowIsCreated)
  const initialFlow = useFlowStore((state) => state.flow)

  const updateIsToCreate = useFlowStore((state) => state.updateIsToCreate)
  const updateIsToAddAction = useFlowStore((state) => state.updateIsToAddAction)
  const updateIsToAddAnswer = useFlowStore((state) => state.updateIsToAddAnswer)
  const updateFlowIsCreated = useFlowStore((state) => state.updateFlowIsCreated)
  const updateFlow = useFlowStore((state) => state.updateFlow)

  return {
    isInCreateMode: isToCreate,
    isInAddActionMode: isToAddAction,
    isInAddAnswerMode: isToAddAnswer,
    isFlowCreated: flowIsCreated,
    flow: initialFlow,
    updateIsToCreateMode: updateIsToCreate,
    updateIsToAddActionMode: updateIsToAddAction,
    updateIsToAddAnswerMode: updateIsToAddAnswer,
    updateFlowIsCreatedFunction: updateFlowIsCreated,
    updateFlowFunction: updateFlow
  }
}
