// Main
import {Typography, Paper, CircularProgress, List, ListItem, ListItemText} from '@mui/material';
// Query
import {useReservationsQuery} from './services/query';

export interface Reservation {
    id: number;
    flightId: number;
    reservationDate: string;
    status: string;
}

const ReservationsHistory = () => {


    const {data: reservations, isLoading, error} = useReservationsQuery({username: 'admin'});

    return (
        <Paper sx={{p: 3}}>
            <Typography variant="h6">تاریخچه رزروهای {'admin'}</Typography>

            {isLoading ? (
                <CircularProgress/>
            ) : error ? (
                <Typography color="error">خطایی در دریافت اطلاعات رخ داد.</Typography>
            ) : reservations.length === 0 ? (
                <Typography>هیچ رزروی یافت نشد.</Typography>
            ) : (
                <List>
                    {reservations.map((res: Reservation) => (
                        <ListItem key={res.id}>
                            <ListItemText
                                primary={`پرواز ${res.flightId}`}
                                secondary={`تاریخ رزرو: ${new Date(res.reservationDate).toLocaleDateString()} - وضعیت: ${res.status}`}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
};

export default ReservationsHistory;
