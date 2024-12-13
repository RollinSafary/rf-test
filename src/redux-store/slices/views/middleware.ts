import {
  type RedirectionProps,
  type IOpenedModal,
  type ModalName,
  type IToastNotification,
} from 'redux-store/types/views';
import { AppDispatch } from 'redux-store/store';
import slice from './slice';

const {
  setRedirection,
  addModalToList,
  removeModalFromList,
  removeAllModalsFromList,
  updateToastNotificationState,
} = slice.actions;

const setRedirectionState =
  (value: RedirectionProps) => (dispatch: AppDispatch) => {
    dispatch(setRedirection(value));
  };

const openModal =
  <P>(value: IOpenedModal<P>) =>
  (dispatch: AppDispatch) => {
    dispatch(addModalToList(value));
  };

const closeModal = (name: ModalName) => (dispatch: AppDispatch) => {
  dispatch(removeModalFromList(name));
};

const closeAllModals = () => (dispatch: AppDispatch) => {
  dispatch(removeAllModalsFromList([]));
};

const setToastNotificationPopUpState =
  (value: IToastNotification) => (dispatch: AppDispatch) => {
    dispatch(updateToastNotificationState(value));
  };

export default {
  setRedirectionState,
  openModal,
  closeModal,
  closeAllModals,
  setToastNotificationPopUpState,
};
