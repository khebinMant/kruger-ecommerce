import axios from 'axios';

//connectar al customer-microservice
export const backEndApi = axios.create({
    baseURL: `http://localhost:8082/api/`,
}) 
