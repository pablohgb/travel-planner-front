import React, { useEffect, useState } from 'react';
import { getTravels } from '../../api/travelsAndInfo';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { Typography } from '@mui/joy';

function TravelPage() {
    const [travels, setTravels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSavedTravels() {
            try {
                const savedTravelsData = await getTravels();
                setTravels(savedTravelsData);
                setIsLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setTravels([]);
                    setIsLoading(false);
                    setError(null);
                } else {
                    console.error('Error fetching saved travels:', error);
                }
            }
        }

        fetchSavedTravels();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (travels && travels.length > 0) {
        return (
            < Box
                sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 2,
                })
                }
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        width:
                            'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
                        maxWidth: '100%',
                        px: 2,
                    }}
                >
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
                            border: '1px',
                            mx: 'auto',
                            borderRadius: 'sm',
                            '& form': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            },
                        }}
                    >
                        <div>
                            <Box
                                sx={(theme) => ({
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: 2,
                                })}
                            >
                                <Typography level="h1" >My Saved Travels</Typography>
                            </Box>
                            <List>
                                {travels.map((travel) => (

                                    <List variant='soft' color="primary" key={travel.id}>
                                        <h2>{travel.travelName}</h2>
                                        {console.log(travels)}
                                        <ListItem variant='soft'>People: {travel.people}</ListItem>
                                        <ListItem variant='soft'>Destination country: {travel.country}</ListItem>
                                        <List variant='soft'>
                                            {travel.cities.map((city) => (
                                                <ListItem key={city.travelCityId}>
                                                    <ListItem>city: {city.city}</ListItem>
                                                    <ListItem>days: {city.days}</ListItem>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </List>
                                ))}
                            </List>
                        </div>
                    </Box>
                </Box>
            </Box>
        );
    } else {
        return (
            < Box

                sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 2,
                })
                }
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        width:
                            'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
                        maxWidth: '100%',
                        px: 2,
                    }}
                >
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: 2,
                        })}
                    >
                        <Typography level="h1" >My Saved Travels</Typography>
                    </Box>
                    <Box
                        sx={(theme) => ({
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: 2,
                        })}
                    >
                        No saved travels yet.
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default TravelPage;
