// Configs
import axiosInstance from '../../../../configs/axois/instance.ts';
// Types
import {ReservationsParamsTypes,} from './type.ts';

export const ReservationsApi = (params: ReservationsParamsTypes) => {
    return axiosInstance({
        method: 'get',
        url: '/reservations',
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
