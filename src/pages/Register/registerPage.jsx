import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import { registerUser } from '../../api/auth'

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
        const userInfo = { email: email, password: password };
        console.log(userInfo, "caca")
        registerUser(userInfo);
    };

    return (
        <Box
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
                        [`& .${formLabelClasses.asterisk}`]: {
                            visibility: 'hidden',
                        },
                    }}
                >
                    <Stack gap={4} sx={{ mb: 2 }}>
                        <Stack gap={1}>
                            <Typography level="h3">Sign up</Typography>
                        </Stack>
                        <Divider />
                        <Stack gap={4} sx={{ mt: 2 }}>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <FormControl required>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl required>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </FormControl>
                                <Stack gap={4} sx={{ mt: 2 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                    </Box>
                                    <Button type="submit" fullWidth>
                                        Sign up
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default RegisterPage;
