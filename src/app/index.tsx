import { dispatch } from 'redux-store/hooks';
import AppRoutes from './routes';
import React, { useEffect } from 'react';
import { ModalsController } from 'components/controllers/ModalsController';

export const App = (): JSX.Element => {
  useEffect(() => {
    console.log('App Mounted');
    dispatch;
  }, []);

  return (
    <>
      <ModalsController />
      <AppRoutes />
    </>
  );
};
