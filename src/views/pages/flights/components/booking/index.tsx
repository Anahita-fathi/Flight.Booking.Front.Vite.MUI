// Main
import {Button, Grid2, Paper, Typography} from '@mui/material';
// Type
import {ReservationDetails} from '../../services/type';


interface BookingProps {
    reservationDetails: ReservationDetails | null;
    handleReset: () => void;
}

const Booking = ({reservationDetails, handleReset}: BookingProps) => {
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
                    <Typography
                        variant="h6">{`قیمت کل: ${reservationDetails?.totalPrice} تومان`}</Typography>
                    <Button variant="contained" color="primary" onClick={handleReset}>
                        رزرو جدید
                    </Button>
                </Paper>
            </Grid2>
        </Grid2>
    );
};
export default Booking;