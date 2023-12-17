import React, { useEffect, useState } from 'react';
import { getTravels } from '../../api/travelsAndInfo';

function TravelPage() {
    const [travels, setTravels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchSavedTravels() {
            try {
                const savedTravelsData = await getTravels();
                setTravels(savedTravelsData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching saved travels:', error);
            }
        }

        fetchSavedTravels();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (travels && travels.length > 0) {
        return (
            <div>
                <h1>My Saved Travels</h1>
                <ul>
                    {travels.map((travel) => (
                        <li key={travel.id}>
                            <h2>{travel.travelName}</h2>
                            <p>People: {travel.people}</p>
                            <p>Destination country: {travel.country}</p>
                            <ul>
                                {travel.cities.map((city) => (
                                    <li>
                                        <p>city: {city.city}</p>
                                        <p>days: {city.days}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <h1>My Saved Travels</h1>
                <p>No saved travels yet.</p>
            </div>
        );
    }
}

export default TravelPage;
