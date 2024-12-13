/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import ConfirmationModal, {
  ConfirmationModalProps,
} from 'components/modals/ConfirmationModal';
import { useAppSelector } from 'redux-store/hooks';
import { viewsSelector } from 'reduxSlices/views';
import { IOpenedModal, ModalName } from 'reduxTypes/views';

const getConfirmationModal = (modal: IOpenedModal<ConfirmationModalProps>) => (
  <ConfirmationModal key={modal.name} {...modal.props} />
);

export const ModalsController = () => {
  const modals = useAppSelector(viewsSelector.modals);

  return (
    <>
      {modals.map((modal) => {
        switch (modal.name) {
          case ModalName.ConfirmationModal:
            return getConfirmationModal(modal);

          default:
            return null;
        }
      })}
    </>
  );
};
