export interface Flight {
    id: number;
    origin: string;
    destination: string;
    date: string;
    time: string;
    price: number;
}

export interface SearchParams {
    origin: string;
    destination: string;
    date: string;
}

export interface Guest {
    name: string;
    age: number;
}

export interface ReservationDetails {
    flight: Flight;
    guests: Guest[];
    totalPrice: number;
}

export type  FlightListParamsTypes = {
    origin?: string;
    destination?: string;
    date?: string;
}