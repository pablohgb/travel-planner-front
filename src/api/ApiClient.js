import axios from 'axios';

// Create a new Axios instance with custom configuration
const apiClient = axios.create({
    baseURL: 'http://localhost:6500', // Set your API base URL here
    timeout: 5000, // Set a timeout for requests (optional)
    headers: {
        'Content-Type': 'application/json', // Set default headers (optional)
    },
});

// You can also add interceptors for request and response
apiClient.interceptors.request.use(
    (config) => {
        // Add any custom logic before sending the request
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        // Add any custom logic for successful responses
        return response;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default apiClient;
