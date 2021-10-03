import axios from 'axios';

export const dummyProducts = axios.create({
    baseURL: 'https://fakestoreapi.com'
})