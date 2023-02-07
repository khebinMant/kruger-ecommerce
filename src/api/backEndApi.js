import axios from 'axios';

//connectar al customer-microservice
export const backEndApi = axios.create({
    baseURL: `http://krugercell-service.sistemaagil.net:8082/api/`,
}) 

//http://localhost:8082/api/products/all