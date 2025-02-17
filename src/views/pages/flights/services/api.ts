// Configs
import axiosInstance from '../../../../configs/axois/instance.ts';
// Types
import {FlightListParamsTypes, ReserveDataTypes} from './type.ts';

export const FlightListApi = (params: FlightListParamsTypes) => {
    return axiosInstance({
        method: 'get',
        url: '/flights',
        params: params,
    })
        .then((response) => {
            console.log('Axios Response:', response.data);
            return response;
        })
        .catch((error) => {
            console.error('Axios Error:', error);
            throw error;
        });
};
export const ReserveApi = (data: ReserveDataTypes) => {
    return axiosInstance({
        method: 'post',
        url: '/reserve',
        data: data,
    })
        .then((response) => {
            console.log('Axios Response:', response.data);
            return response;
        })
        .catch((error) => {
            console.error('Axios Error:', error);
            throw error;
        });
};