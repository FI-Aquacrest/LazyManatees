import axios from 'axios';

/**
 * Creates a single axios instance to be used throughout the app.
 */
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    params: {}
});

export default AxiosInstance;