import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from 'redux-store/store'

const selector = (state: RootState) => state.views

export const redirection = createSelector(
  [selector],
  (state) => state.redirection,
)
export const modals = createSelector([selector], (state) => state.modals)
export const toastNotificationPopUp = createSelector(
  [selector],
  (state) => state.toastNotificationPopUp,
)

export default {
  redirection,
  modals,
  toastNotificationPopUp,
}
