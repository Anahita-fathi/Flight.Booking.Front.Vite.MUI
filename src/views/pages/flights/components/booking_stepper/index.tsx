// Main
import {Typography} from '@mui/material';
// Components
import SearchFlight from '../../components/search_flight';
import ExistedFlights from '../../components/existed_flights';
import AddGuess from '../../components/add_guess';
import Booking from '../../components/booking';
// Types
import {Flight, FlightListParamsTypes, Guest, ReservationDetails} from '../../services/type';

interface FlightBookingStepsProps {
    activeStep: number;
    searchParams: FlightListParamsTypes;
    setSearchParams: (params: FlightListParamsTypes) => void;
    handleSearch: () => void;
    flights: Flight[];
    handleSelectFlight: (flight: Flight) => void;
    guests: Guest[];
    handleGuestChange: (index: number, field: 'name' | 'age', value: string | number) => void;
    handleAddGuest: () => void;
    handleReserve: () => void;
    reservationDetails: ReservationDetails | null;
    handleReset: () => void;
}

const FlightBookingSteps = ({
                                activeStep,
                                searchParams,
                                setSearchParams,
                                handleSearch,
                                flights,
                                handleSelectFlight,
                                guests,
                                handleGuestChange,
                                handleAddGuest,
                                handleReserve,
                                reservationDetails,
                                handleReset,
                            }: FlightBookingStepsProps) => {
    switch (activeStep) {
        case 0:
            return <SearchFlight searchParams={searchParams} setSearchParams={setSearchParams}
                                 handleSearch={handleSearch}/>;
        case 1:
            return <ExistedFlights flights={flights} handleSelectFlight={handleSelectFlight}/>;
        case 2:
            return <AddGuess guests={guests} handleGuestChange={handleGuestChange} handleAddGuest={handleAddGuest}
                             handleReserve={handleReserve}/>;
        case 3:
            return <Booking reservationDetails={reservationDetails} handleReset={handleReset}/>;
        default:
            return <Typography>مرحله نامعتبر</Typography>;
    }
};

export default FlightBookingSteps;
