import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    params: {}
});

export default AxiosInstance;