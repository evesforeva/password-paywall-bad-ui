import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const PriceTier = ({ children, heading, price, subtitle }) => (
  <Grid item xs={3}>
    <Box
      sx={{
        borderColor: 'primary.main',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 1,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '25rem',
        justifyContent: 'space-between',
        padding: 2,
        width: '20em',
      }}
    >
      <Typography variant="h4">{heading}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
      <Typography>{children}</Typography>
      <Typography variant="h2">{price}</Typography>
    </Box>
  </Grid>
);

export default PriceTier;
