import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import { Translations } from 'constants/translations';

const RootLayout = () => {
  const [t] = useTranslation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header>{t(Translations.ROOT_LAYOUT_EXAMPLE_TEXT)}</Header>
      <Outlet />
    </Box>
  );
};

export default RootLayout;
