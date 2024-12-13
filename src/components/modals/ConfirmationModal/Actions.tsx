import React from 'react';
import { LoadingButton } from '@mui/lab';
import { DialogActions } from '@mui/material';
import { Translations } from 'constants/translations';
import { useTranslation } from 'react-i18next';

interface FormActionsProps {
  onClose: () => void;
}
const Actions = ({ onClose }: FormActionsProps) => {
  const [t] = useTranslation();
  return (
    <DialogActions>
      <LoadingButton onClick={onClose}>
        {t(Translations.MODAL_CONFIRMATION_BUTTON_CANCEL)}
      </LoadingButton>
      <LoadingButton type="submit">
        {t(Translations.MODAL_CONFIRMATION_BUTTON_CONFIRM)}
      </LoadingButton>
    </DialogActions>
  );
};

export default Actions;
