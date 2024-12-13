import AppRoutes from './routes';
import React, { useEffect } from 'react';
import 'styles/global.scss';

export const App = (): JSX.Element => {
  useEffect(() => {
    console.log('App Mounted');
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
};
