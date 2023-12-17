import apiClient from "./ApiClient";

async function getCountries() {
    try {
        const response = await apiClient.get('/countries');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error so it can be handled in the component
    }
}

async function getCitiesByCountry(countryId) {
    try {
        const response = await apiClient.get(`/cities/${countryId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error so it can be handled in the component
    }
}

function createTravel(travel) {
    apiClient.post('/travel/create-travel', {
        travelName: travel.travelName,
        people: travel.people,
        country: travel.country,
        token: localStorage.getItem('token'),
        cities: travel.cities
    })
}

async function getTravels() {
    const data = localStorage.getItem('token')

    try {
        const response = await apiClient.get(`/travel/travel-page/${data}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// function getTravels() {
//     const data = localStorage.getItem('token')
//     console.log(data)
//     apiClient.post('travel/travel-page', {
//         token: data
//     })
//         .then(function (response) {
//             console.log(response.data)
//             return response.data
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

export { getCountries, getCitiesByCountry, createTravel, getTravels };
