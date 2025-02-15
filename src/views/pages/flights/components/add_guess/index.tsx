// Main
import {Button, Grid2, Paper, Stack, TextField, Typography} from '@mui/material';
// Type
import {Guest} from '../../services/type';


interface AddGuessProps {
    guests: Guest[];
    handleGuestChange: (index: number, field: 'name' | 'age', value: string | number) => void;
    handleAddGuest: () => void;
    handleReserve: () => void;
}

const AddGuess = ({guests, handleAddGuest, handleGuestChange, handleReserve}: AddGuessProps) => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={{xs: 12}}>
                <Typography variant="h6">افزودن مهمان</Typography>
                {guests.map((guest, index) => (
                    <Paper key={index} sx={{mb: 2, p: 2}}>
                        <Grid2 container spacing={2}>
                            <Grid2 size={{xs: 12, md: 6}}>
                                <TextField
                                    fullWidth
                                    label="نام مهمان"
                                    value={guest.name}
                                    onChange={(e) =>
                                        handleGuestChange(index, 'name', e.target.value)
                                    }
                                />
                            </Grid2>
                            <Grid2 size={{xs: 12, md: 6}}>
                                <TextField
                                    fullWidth
                                    label="سن مهمان"
                                    type="number"
                                    value={guest.age}
                                    onChange={(e) =>
                                        handleGuestChange(index, 'age', e.target.value)
                                    }
                                />
                            </Grid2>
                        </Grid2>
                    </Paper>
                ))}
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="contained" color="primary" onClick={handleAddGuest}>
                        افزودن مهمان
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleReserve}
                    >
                        محاسبه و ادامه
                    </Button>
                </Stack>
            </Grid2>
        </Grid2>
    );
};
export default AddGuess;