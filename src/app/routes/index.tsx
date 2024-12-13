import React from 'react';
import RootLayout from 'layouts/RootLayout';
import NotFoundPage from 'components/pages/not-found';
import RootPage from 'components/pages/root';
import 'helpers/i18n';
import { useEffect } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { dispatch } from 'redux-store/hooks';
import { coreMiddleware } from 'reduxSlices/core';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<RootPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const AppRoutes = () => {
  useEffect(() => {
    dispatch(coreMiddleware.initalize());
  }, []);

  return <RouterProvider {...{ router }} />;
};

export default AppRoutes;
