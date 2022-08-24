import axios from 'axios';

export const reqResApi = axios.create({
    baseURL: 'https://api.factoryfour.com',
});

export const reqResApiCors = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.factoryfour.com',
});