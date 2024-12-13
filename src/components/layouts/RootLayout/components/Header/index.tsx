import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const Header = ({ children }: React.PropsWithChildren) => {
  return (
    <AppBar position="fixed">
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default Header;
