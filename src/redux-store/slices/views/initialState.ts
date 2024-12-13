import { IViewsSliceState } from 'reduxTypes/views'

export const getInitialState = (): IViewsSliceState => ({
  redirection: {
    path: '/',
    params: '',
    apply: false,
  },
  modals: [],
  toastNotificationPopUp: {
    open: false,
    props: null,
  },
})
