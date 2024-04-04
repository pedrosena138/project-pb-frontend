import * as React from 'react';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Pitang Booster{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}