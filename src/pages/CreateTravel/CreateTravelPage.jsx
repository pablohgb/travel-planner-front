import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Option from '@mui/joy/Option';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import { createTravel, getCitiesByCountry, getCountries } from '../../api/travelsAndInfo';

function CreateTravelPage() {
    const [travelName, setTravelName] = useState('');
    const [people, setPeople] = useState(1);
    const [country, setCountry] = useState('');
    const [citiesByCountry, setcitiesByCountry] = useState([]);
    const [cities, setCities] = useState([{ city: '', days: '' }]);
    const [citiesDisabled, setCitiesDisabled] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const countriesData = await getCountries();
                setCountries(countriesData);
                console.log('Fetched countries:', countriesData);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }

        fetchCountries();

    }, []);

    const handleCountryChange = async (e) => {
        const selectedCountry = e.target.getAttribute('dataid');

        setCountry(selectedCountry);

        try {
            const citiesData = await getCitiesByCountry(selectedCountry);

            setcitiesByCountry(citiesData);
            setCitiesDisabled(false);

        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const handleAddCity = () => {
        setCities([...cities, { city: '', days: 1 }]);
    };

    const handleCityChange = (event, index) => {
        const updatedcities = [...cities];
        updatedcities[index].city = event.target.getAttribute('dataid');
        setCities(updatedcities);
    };


    const handleRemoveCity = () => {
        if (cities.length > 1) {
            const updatedcities = [...cities];
            updatedcities.splice(cities.length - 1, 1);
            setCities(updatedcities);
        }
    };

    const handleDaysChange = (event, index) => {
        const updatedcities = [...cities];
        updatedcities[index].days = event.target.value;
        setCities(updatedcities);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            travelName,
            people,
            country,
            cities,
        };

        createTravel(formData)
        console.log(formData);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 400,
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
                        mx: 'auto',
                        borderRadius: 'sm',
                    }}
                >
                    <Typography variant="h5">Create Travel</Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl required>
                            <FormLabel>Travel Name</FormLabel>
                            <Input
                                type="text"
                                name="travelName"
                                value={travelName}
                                onChange={(e) => setTravelName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl required>
                            <FormLabel>Number of People</FormLabel>
                            <Input
                                type="number"
                                name="people"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                            />
                        </FormControl>
                        <FormControl required>
                            <FormLabel>Country</FormLabel>
                            <Select
                                onChange={(e) => {
                                    if (e && e.target) {
                                        handleCountryChange(e)

                                    }
                                }}
                            >
                                {countries.map((countryItem) => (
                                    <Option key={countryItem._id} value={countryItem.name} name={countryItem.name} dataid={countryItem._id}>
                                        {countryItem.name}
                                    </Option>
                                ))}
                            </Select>
                        </FormControl>
                        {cities.map((cities, index) => (
                            <div key={index}>
                                <FormControl required>
                                    <FormLabel>City</FormLabel>
                                    <Select
                                        onChange={(e) => {
                                            if (e && e.target) {
                                                handleCityChange(e, index)
                                            }
                                        }}
                                        disabled={citiesDisabled}
                                    >
                                        {citiesByCountry.map((cityItem) => (
                                            <Option key={cityItem._id} value={cityItem.name} name={cityItem.name} dataid={cityItem._id}>
                                                {cityItem.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl required>
                                    <FormLabel>Number of Days</FormLabel>
                                    <Input
                                        type="number"
                                        value={cities.days}
                                        onChange={(e) => handleDaysChange(e, index)}
                                        disabled={citiesDisabled}
                                    />
                                </FormControl>

                            </div>
                        ))}


                        <Button
                            variant="outlined"
                            onClick={handleAddCity}
                            sx={{ mt: 2 }}
                        >
                            Add City
                        </Button>
                        {cities.length > 1 && (
                            <Button
                                variant="outlined"
                                onClick={() => handleRemoveCity()}
                                sx={{ mt: 2 }}
                            >
                                Delete City
                            </Button>
                        )}
                        <Stack gap={4} sx={{ mt: 2 }}>
                            <Button type="submit" fullWidth variant="contained">
                                Create Travel
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default CreateTravelPage;
