export enum ModalName {
  SignInModal = 'SignInModal',
  SignOutModal = 'SignOutModal',
  ConfirmationModal = 'ConfirmationModal',
  StoreCategoryModal = 'StoreCategoryModal',
  StoreTagModal = 'StoreTagModal',
  StoreProductModal = 'StoreProductModal',
  StoreTypeModal = 'StoreTypeModal',
  SelectProductModal = 'SelectProductModal',
}

export interface IViewsSliceState {
  redirection: RedirectionProps
  modals: IOpenedModal[]
  toastNotificationPopUp: IToastNotification
}

export interface RedirectionProps {
  path: string
  params?: string
  apply: boolean
}

export interface IOpenedModal<P = any> {
  name: ModalName
  props: P
}

export interface IToastNotification {
  open: boolean
  props: IToastNotificationProps | null
}

export enum SeveritiesType {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
}

interface IToastNotificationProps {
  severityType: SeveritiesType
  message: string
}
