import React, { useCallback } from 'react';
import { dispatch } from 'redux-store/hooks';
import { viewsMiddleware } from 'reduxSlices/views';
import { ModalName } from 'reduxTypes/views';
import Body from './Body';
import Header from './Header';
import Actions from './Actions';
import BootstrapDialog from '../common/BootstrapDialog';

export interface ConfirmationModalProps {
  title: string;
  subtitle: string;
  confirmationCallback: () => void;
  cancellationCallback?: () => void;
}

const ConfirmationModal = ({
  title,
  subtitle,
  confirmationCallback,
  cancellationCallback,
}: ConfirmationModalProps) => {
  const handleClose = useCallback(() => {
    cancellationCallback?.();
    dispatch(viewsMiddleware.closeModal(ModalName.ConfirmationModal));
  }, [cancellationCallback]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(viewsMiddleware.closeModal(ModalName.ConfirmationModal));
    confirmationCallback();
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby={title}
      PaperProps={{
        component: 'form',
        onSubmit,
        sx: { minWidth: '30%' },
      }}
      open
    >
      <Header title={title} onClose={handleClose} />
      <Body subtitle={subtitle} />
      <Actions onClose={handleClose} />
    </BootstrapDialog>
  );
};

export default ConfirmationModal;
