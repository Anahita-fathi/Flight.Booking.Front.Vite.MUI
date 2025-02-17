// Main
import {Button, Grid2, Paper, Typography} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// Services
import {ReserveApi} from '../../services/api';
// Types
import {ReservationDetails} from '../../services/type';
import {routes} from '../../../../../configs/routes/default';

interface BookingProps {
    reservationDetails: ReservationDetails | null;
    handleReset?: () => void;
}

const Booking = ({reservationDetails}: BookingProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [reservationMessage, setReservationMessage] = useState<string | null>(null);
    const [isReserved, setIsReserved] = useState(false);

    const navigate = useNavigate();

    const handleReserve = async () => {
        if (!reservationDetails) return;

        setIsLoading(true);

        const reserveData = {
            username: 'admin',
            flightId: reservationDetails.flight.id,
        };

        try {
            const response = await ReserveApi(reserveData);
            setReservationMessage(response.data.message);
            setIsReserved(true);
            navigate(routes.reservations.reservations.path);

        } catch (error) {
            console.log(error);
            setReservationMessage('Error during reservation');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Grid2 container spacing={2}>
            <Grid2 size={{xs: 12}}>
                <Typography variant="h6">تایید رزرو</Typography>
                <Paper sx={{p: 2}}>
                    <Typography variant="h6">جزئیات پرواز</Typography>
                    <Typography>{`${reservationDetails?.flight.origin} به ${reservationDetails?.flight.destination}`}</Typography>
                    <Typography>{`تاریخ: ${reservationDetails?.flight.date} - زمان: ${reservationDetails?.flight.time}`}</Typography>
                    <Typography>{`قیمت هر نفر: ${reservationDetails?.flight.price} تومان`}</Typography>
                    <Typography variant="h6">مهمان‌ها</Typography>
                    {reservationDetails?.guests.map((guest, index) => (
                        <Typography key={index}>{`${guest.name} (${guest.age} سال)`}</Typography>
                    ))}
                    <Typography variant="h6">{`قیمت کل: ${reservationDetails?.totalPrice} تومان`}</Typography>

                    {!isReserved ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleReserve}
                            disabled={isLoading}
                        >
                            {isLoading ? 'در حال رزرو...' : 'رزرو'}
                        </Button>
                    ) : (
                        <Typography variant="h6" color="success.main">پرواز با موفقیت رزرو شد!</Typography>
                    )}

                    {reservationMessage && !isReserved && (
                        <Typography variant="body2" color="textSecondary" sx={{mt: 2}}>
                            {reservationMessage}
                        </Typography>
                    )}
                </Paper>
            </Grid2>
        </Grid2>
    );
};

export default Booking;
