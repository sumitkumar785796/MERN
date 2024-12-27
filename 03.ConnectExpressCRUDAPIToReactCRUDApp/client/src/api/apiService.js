import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:4002",
});

// GET request
export const getData = async () => {
    try {
        const response = await API.get('/');
        return response.data.data; // Return the data directly if successful
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error("Server is disconnected..."); // Throw a descriptive error
    }
};
// Input request
export const inputData = async (input) => {
    try {
        const response = await API.post('/',input);
        return response.data.data; // Return the data directly if successful
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error("Server is disconnected..."); // Throw a descriptive error
    }
};
// Input request
export const updateData = async (id,input) => {
    try {
        const response = await API.put(`/user/${id}`,input);
        return response.data.data; // Return the data directly if successful
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error("Server is disconnected..."); // Throw a descriptive error
    }
};
// Input request
export const deleteData = async (id) => {
    try {
        const response = await API.delete(`/user/${id}`);
        return response.data.data; // Return the data directly if successful
        
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error("Server is disconnected..."); // Throw a descriptive error
    }
};
