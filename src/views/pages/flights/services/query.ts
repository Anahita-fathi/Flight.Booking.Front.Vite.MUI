// Main
import {useQuery} from '@tanstack/react-query';
// Types
import {FlightListParamsTypes} from './type.ts';
// Services
import {FlightListApi} from './api.ts';

export const FlightListQuery = (params: FlightListParamsTypes) =>
    useQuery({
        queryKey: ['FlightListQuery', params],
        queryFn: () => FlightListApi(params),
    });
