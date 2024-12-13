import React from 'react';
import { Box, DialogContent, DialogContentText } from '@mui/material';
interface BodyProps {
  subtitle: string;
}
const Body = ({ subtitle }: BodyProps) => {
  return (
    <DialogContent dividers>
      <Box sx={{ pb: '14px' }}>
        <DialogContentText>{subtitle}</DialogContentText>
      </Box>
    </DialogContent>
  );
};

export default Body;
