import React from 'react'

type ToastTypes = 'normal' | 'action' | 'success' | 'error' | 'loading'
type PromiseT<Data = any> = Promise<Data> | (() => Promise<Data>)
type PromiseData<ToastData = any> = ExternalToast & {
  loading: string | React.ReactNode
  success: string | React.ReactNode | ((data: ToastData) => React.ReactNode | string)
  error: string | React.ReactNode | ((error: any) => React.ReactNode | string)
}
interface ToastT {
  id: number | string
  title?: string | React.ReactNode
  type?: ToastTypes
  icon?: React.ReactNode
  jsx?: React.ReactNode
  invert?: boolean
  description?: string
  duration?: number
  delete?: boolean
  important?: boolean
  action?: {
    label: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
  cancel?: {
    label: string
    onClick?: () => void
  }
  onDismiss?: (toast: ToastT) => void
  onAutoClose?: (toast: ToastT) => void
  promise?: PromiseT
  style?: React.CSSProperties
  className?: string
  descriptionClassName?: string
}
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
interface ToastOptions {
  className?: string
  descriptionClassName?: string
  style?: React.CSSProperties
}
export interface ToasterProps {
  invert?: boolean
  theme?: 'light' | 'dark'
  position?: Position
  hotkey?: string[]
  richColors?: boolean
  expand?: boolean
  duration?: number
  visibleToasts?: number
  closeButton?: boolean
  toastOptions?: ToastOptions
  className?: string
  style?: React.CSSProperties
  offset?: string | number
}
type ExternalToast = Omit<ToastT, 'id' | 'type' | 'title'> & {
  id?: number | string
}

declare const toast: ((message: string | React.ReactNode, data?: ExternalToast) => string | number) & {
  success: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  error: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  custom: (jsx: (id: number | string) => React.ReactElement, data?: ExternalToast) => void
  message: (message: string | React.ReactNode, data?: ExternalToast) => string | number
  promise: <ToastData>(promise: PromiseT<ToastData>, data?: PromiseData<ToastData>) => string | number
  dismiss: (id?: number | string) => string | number
}

declare const Toaster: (props: ToasterProps) => React.JSX.Element

export { ExternalToast, ToastT, Toaster, toast }
