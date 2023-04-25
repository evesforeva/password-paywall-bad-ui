import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import Pricing from './Pricing';
import RegistrationConfirmation from './RegistrationConfirmation';
import RegistrationForm from './RegistrationForm';

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <Container maxWidth="xl" sx={{ my: 1 }}>
      <CssBaseline />
      <Typography component="h1" color="primary" variant="h4" sx={{ px: 2 }}>
        Microblog
      </Typography>
      <Stack alignItems="center" spacing={2}>
        <RegistrationForm onRegister={() => setStep(1)} />
        <Collapse in={step >= 1} sx={{ width: '100%' }}>
          <RegistrationConfirmation onConfirm={() => setStep(2)} />
        </Collapse>
        <Collapse in={step >= 2} sx={{ width: '100%' }}>
          <Pricing />
        </Collapse>
      </Stack>
    </Container>
  );
};

export default App;
