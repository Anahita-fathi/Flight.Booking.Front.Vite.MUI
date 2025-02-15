// Main
import {lazy} from 'react';
// Components
const Login = lazy(() => import('../../../views/pages/login'));
const Flights = lazy(() => import('../../../views/pages/flights'));

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
};
