import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
    baseURL: 'https://localhost:7160',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to set the token globally for all requests
const setAuthToken = (token: string | null) => {
    if (token) {
        // If the token exists, set it in the Authorization header
        instance.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        // If no token, remove it from the header
        delete instance.defaults.headers['Authorization'];
    }
};

// Login API to authenticate and store the token
export const loginApi = async (params: { username: string; password: string }) => {
    try {
        const response = await instance.post('/login', params); // Replace with your login endpoint
        console.log('Login Success:', response.data);

        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);

        // Set the token in the Axios instance for future requests
        setAuthToken(response.data.token);

        return response;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};


export default instance;
