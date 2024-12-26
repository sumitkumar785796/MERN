import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:4001",
});

// GET request
export const getData = async () => {
    try {
        const response = await API.get('/server');
        return response.data; // Return the data directly if successful
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error("Server is disconnected..."); // Throw a descriptive error
    }
};
