// Main
import {lazy} from 'react';
// Components
const Login = lazy(() => import('../../../views/pages/login'));
const Flights = lazy(() => import('../../../views/pages/flights'));
const ReservationsHistory = lazy(() => import('../../../views/pages/reservations_history'));

export const routes = {
    auth: {
        login: {
            key: 'login',
            path: '/',
            element: <Login/>,
        },
    },
    flights: {
        flights: {
            key: 'flights',
            path: '/flights',
            element: <Flights/>,
        },
    },
    reservations: {
        reservations: {
            key: 'reservations',
            path: '/reservations',
            element: <ReservationsHistory/>,
        },
    },

};
