import { create } from 'zustand'

interface FlowStore {
  isToCreate: boolean
  isToAddAction: boolean
  isToAddAnswer: boolean
  flowIsCreated: boolean
  flow: Flow
  updateIsToCreate: (isToCreate: boolean) => void
  updateIsToAddAction: (isToAddAction: boolean) => void
  updateIsToAddAnswer: (isToAddAnswer: boolean) => void
  updateFlowIsCreated: (flowIsCreated: boolean) => void
  updateFlow: (flow: Flow) => void
}

interface Flow {
  name: string
}

export const useFlowStore = create<FlowStore>((set) => ({
  isToCreate: true,
  isToAddAction: false,
  isToAddAnswer: false,
  flowIsCreated: false,
  flow: {
    name: 'default'
  },
  updateIsToCreate: (isToCreate) => set({ isToCreate }),
  updateIsToAddAction: (isToAddAction) => set({ isToAddAction }),
  updateIsToAddAnswer: (isToAddAnswer) => set({ isToAddAnswer }),
  updateFlowIsCreated: (flowIsCreated) => set({ flowIsCreated }),
  updateFlow: (flow) => set({ flow })

}))
