import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const RegistrationConfirmation = ({ onConfirm }) => (
  <Stack alignItems="center" spacing={2}>
    <Divider sx={{ width: '100%' }} />
    <Container maxWidth="sm">
      <Typography paragraph>
        Successfully registered. Before you'd like to get started, do you want
        to add a password?
      </Typography>
      <Stack direction="row" justifyContent="flex-end" spacing={1}>
        <Button type="button">No</Button>
        <Button onClick={onConfirm} type="button">
          Yes
        </Button>
      </Stack>
    </Container>
  </Stack>
);

export default RegistrationConfirmation;
