import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PriceTier from './PriceTier';

const Pricing = () => (
  <Stack alignItems="center" spacing={2}>
    <Divider sx={{ width: '100%' }} />
    <div>
      <Container maxWidth="md">
        <Typography align="center" paragraph>
          We've conveniently added multiple ways to keep you safe
        </Typography>
      </Container>
      <Grid container spacing={2}>
        <PriceTier heading="Free tier" price="FREE" subtitle="No security">
          If you're strapped for cash, you can still enjoy our wonderful app, no
          password required. Just log in with your username, and you'll be able
          to get started microblogging immediately.
        </PriceTier>
        <PriceTier
          heading="Standard tier"
          price="$2/month"
          subtitle="Plaintext password"
        >
          We won't let just anybody log in for you! We'll protect your account
          with a password stored in plaintext in a JSON file. A low-cost peace
          of mind!
        </PriceTier>
        <PriceTier
          heading="Deluxe tier"
          price="$4/month"
          subtitle="Salted and hashed password"
        >
          We'll store your password using a one-way hashing algorithm. That
          means hackers won't be able to use your same password on other sites
          you log into. Our best value! Most customers choose this option.
        </PriceTier>
        <PriceTier
          heading="Premium tier"
          price="$6/month"
          subtitle="Multifactor Authentication"
        >
          Our best security option! Get a salted and hashed password plus
          additional verification with something you have on you, such as an
          email address or mobile phone. If you have issues with logging in, our
          team will even respond to support emails eventually.
        </PriceTier>
      </Grid>
    </div>
  </Stack>
);

export default Pricing;
