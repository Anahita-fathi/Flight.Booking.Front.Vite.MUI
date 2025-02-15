interface Flight {
    id: number;
    origin: string;
    destination: string;
    date: string;
    time: string;
    price: number;
}

export const allFlights: Flight[] = [
    {
        id: 1,
        origin: 'تهران',
        destination: 'مشهد',
        date: '2023-10-15',
        time: '10:00',
        price: 500000,
    },
    {
        id: 2,
        origin: 'تهران',
        destination: 'شیراز',
        date: '2023-10-15',
        time: '12:00',
        price: 600000,
    },
    {
        id: 3,
        origin: 'تهران',
        destination: 'اصفهان',
        date: '2023-10-15',
        time: '14:00',
        price: 450000,
    },
    {
        id: 4,
        origin: 'مشهد',
        destination: 'تهران',
        date: '2023-10-16',
        time: '08:00',
        price: 550000,
    },
    {
        id: 5,
        origin: 'شیراز',
        destination: 'تهران',
        date: '2023-10-16',
        time: '16:00',
        price: 650000,
    },
];