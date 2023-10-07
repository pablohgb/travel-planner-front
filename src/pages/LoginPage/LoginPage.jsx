import React, { useState } from 'react';
import { loginUser } from '../../api/auth';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Checkbox from '@mui/joy/Checkbox';
import Button from '@mui/joy/Button';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Perform login logic with username and password
    setEmail('');
    setPassword('');
    const userInfo = { email: email, password: password };
    loginUser(userInfo)
  };

  return (
    <FormLabel
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 2
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
          width:
            'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
          maxWidth: '100%',
          px: 2,
        }}
      >
        <Box
          component="header"
          sx={{
            py: 3,
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'space-between',
          }}
        ></Box>
        <Box
          component="main"
          sx={{
            my: 'auto',
            py: 2,
            pb: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: 400,
            maxWidth: '100%',
            mx: 'auto',
            borderRadius: 'sm',
            '& form': {
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            },
            // [`& .${formLabelClasses.asterisk}`]: {
            //   visibility: 'hidden',
            // },
          }}
        >
          <Stack gap={4} sx={{ mb: 2 }}>
            <Stack gap={1}>
              <Typography level="h3">Sign in</Typography>
              <Typography level="body-sm">
                New to company?{' '}
                <Link href="#replace-with-a-link" level="title-sm">
                  Sign up!
                </Link>
              </Typography>
            </Stack>
            <Divider />
            <Stack gap={4} sx={{ mt: 2 }}>
              <form
              // onSubmit={handleSubmit} => {
              //   event.preventDefault();
              //   const formElements = event.currentTarget.elements;
              //   const data = {
              //     email: formElements.email.value,
              //     password: formElements.password.value,
              //     persistent: formElements.persistent.checked,
              //   };
              //   alert(JSON.stringify(data, null, 2));
              // }}
              >
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" />
                </FormControl>
                <Stack gap={4} sx={{ mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Remember me" name="persistent" />
                  </Box>
                  <Button type="submit" fullWidth>
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </FormLabel >
  );
}

export default LoginPage;
