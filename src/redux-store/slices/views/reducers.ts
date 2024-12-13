import { type SliceCaseReducers } from '@reduxjs/toolkit'
import { type IAction } from 'redux-store/store'
import {
  type IViewsSliceState,
  type RedirectionProps,
  type IOpenedModal,
  type ModalName,
  type IToastNotification,
} from 'redux-store/types/views'

const createReducer = <T extends SliceCaseReducers<IViewsSliceState>>(
  reducer: T,
) => ({ ...reducer })

const reducers = createReducer({
  setRedirection(state, action: IAction<RedirectionProps>) {
    state.redirection = action.payload
  },
  addModalToList<P>(state: IViewsSliceState, action: IAction<IOpenedModal<P>>) {
    if (!state.modals.find((modal) => modal.name === action.payload.name)) {
      state.modals.push(action.payload)
    }
  },
  removeModalFromList(state: IViewsSliceState, action: IAction<ModalName>) {
    state.modals = state.modals.filter((modal) => modal.name !== action.payload)
  },
  removeAllModalsFromList<P>(
    state: IViewsSliceState,
    action: IAction<Array<IOpenedModal<P>>>,
  ) {
    state.modals = action.payload
  },
  updateToastNotificationState(
    state: IViewsSliceState,
    action: IAction<IToastNotification>,
  ) {
    state.toastNotificationPopUp = action.payload
      ? action.payload
      : { open: false, props: null }
  },
})

export default reducers
