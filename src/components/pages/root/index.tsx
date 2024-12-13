import React, { useEffect } from 'react';
import { ConfirmationModalProps } from 'components/modals/ConfirmationModal';
import { Translations } from 'constants/translations';
import { dispatch } from 'redux-store/hooks';
import { viewsMiddleware } from 'reduxSlices/views';
import { ModalName } from 'reduxTypes/views';
import { useTranslation } from 'react-i18next';

const confirmationCallback = () => {
  console.log('Confirmed');
};

const RootPage = () => {
  const [t] = useTranslation();

  useEffect(() => {
    console.log('Root Page Mounted');
    const props: ConfirmationModalProps = {
      title: t(Translations.MODAL_CONFIRMATION_DELETE_TITLE),
      subtitle: t(Translations.MODAL_CONFIRMATION_DELETE_SUBTITLE),
      confirmationCallback,
    };
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.ConfirmationModal,
        props,
      })
    );
  }, []);

  return <>Root Page</>;
};

export default RootPage;
