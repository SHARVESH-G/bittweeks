import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'start',
  fontSize:'20px',
  color: 'black',
  fontWeight:'800',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));
const ItemHeading = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'start',
  fontSize: '20px',
  color: 'var(--colorPrimaryTernary)',
  fontWeight: '800',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));




export const DetailItem = ({label , value}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid size={12}>
          <ItemHeading>{label}</ItemHeading>
        </Grid>
        <Grid size={12}>
          <Item>{value}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
