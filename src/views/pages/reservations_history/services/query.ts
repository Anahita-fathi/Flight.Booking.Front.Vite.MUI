import {useQuery} from '@tanstack/react-query';
// Services
import {ReservationsApi} from './api.ts';
// Types
import {ReservationsParamsTypes} from './type.ts';

export const useReservationsQuery = (params: ReservationsParamsTypes) =>
    useQuery({
        queryKey: ['ReservationsQuery', params],
        queryFn: async () => {
            const response = await ReservationsApi(params);
            return response.data; // Return only the data
        },
    });
