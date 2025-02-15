// Main
import {Button, Grid2, TextField} from '@mui/material';
// Types
import {FlightListParamsTypes} from '../../services/type';


interface SearchFlightProps {
    searchParams: FlightListParamsTypes;
    setSearchParams: (searchParams: FlightListParamsTypes) => void;
    handleSearch: () => void;
}

const SearchFlight = ({searchParams, setSearchParams, handleSearch}: SearchFlightProps) => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={{xs: 12, md: 4}}>
                <TextField
                    fullWidth
                    label="مبدا"
                    value={searchParams.origin}
                    onChange={(e) =>
                        setSearchParams({...searchParams, origin: e.target.value})
                    }
                />
            </Grid2>
            <Grid2 size={{xs: 12, md: 4}}>
                <TextField
                    fullWidth
                    label="مقصد"
                    value={searchParams.destination}
                    onChange={(e) =>
                        setSearchParams({...searchParams, destination: e.target.value})
                    }
                />
            </Grid2>
            <Grid2 size={{xs: 12, md: 4}}>
                <TextField
                    fullWidth
                    type="date"
                    value={searchParams.date}
                    onChange={(e) =>
                        setSearchParams({...searchParams, date: e.target.value})
                    }
                />
            </Grid2>
            <Grid2 size={{xs: 12}}>
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    جستجو
                </Button>
            </Grid2>
        </Grid2>
    );
};
export default SearchFlight;