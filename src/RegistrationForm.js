import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const RegistrationForm = ({ onRegister }) => (
  <Container maxWidth="sm">
    <Typography paragraph>Register now to start microblogging today</Typography>
    <Stack spacing={2}>
      <TextField autoComplete="off" id="username" label="Username" />
      <Button
        onClick={onRegister}
        type="button"
        variant="contained"
        sx={{ alignSelf: 'flex-end' }}
      >
        Register
      </Button>
    </Stack>
  </Container>
);

export default RegistrationForm;
