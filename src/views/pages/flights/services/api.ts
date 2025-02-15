// Configs
import axios from 'axios';
// Types
import {FlightListParamsTypes} from './type.ts';

export const FlightListApi = (params: FlightListParamsTypes) =>
    axios({
        method: 'get',
        url: 'https://localhost:7160/flights',
        params: params,
    })
        .then(response => {
            console.log('Axios Response:', response.data);
            return response;
        })
        .catch(error => {
            console.error('Axios Error:', error);
            throw error;
        });