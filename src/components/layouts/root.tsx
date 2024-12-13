import React from 'react';
import { Translations } from 'constants/translations';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  const [t] = useTranslation();
  return (
    <>
      <p>{t(Translations.ROOT_LAYOUT_EXAMPLE_TEXT)}</p>
      <Outlet />
    </>
  );
};

export default RootLayout;
