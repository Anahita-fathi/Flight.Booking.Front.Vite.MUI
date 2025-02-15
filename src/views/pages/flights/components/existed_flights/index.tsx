// Main
import {Button, Grid2, List, ListItem, ListItemText, Paper, Typography} from '@mui/material';
// Type
import {Flight} from '../../services/type';


interface SearchParamsProps {
    flights: Flight[];
    handleSelectFlight: (flight: Flight) => void;
}

const ExistedFlights = ({flights, handleSelectFlight}: SearchParamsProps) => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={{xs: 12}}>
                <Typography variant="h6">پروازهای موجود</Typography>
                <List>
                    {flights.map((flight: Flight) => (
                        <Paper key={flight.id} sx={{mb: 2, p: 2}}>
                            <ListItem>
                                <ListItemText
                                    primary={`${flight.origin} به ${flight.destination}`}
                                    secondary={`تاریخ: ${flight.date} - زمان: ${flight.time} - قیمت: ${flight.price} تومان`}
                                />
                                <Button
                                    variant="outlined"
                                    onClick={() => handleSelectFlight(flight)}
                                >
                                    انتخاب
                                </Button>
                            </ListItem>
                        </Paper>
                    ))}
                </List>
            </Grid2>
        </Grid2>
    );
};
export default ExistedFlights;