// Main
import {useState} from 'react';
import {Grid2, Typography, Stepper, Step, StepLabel} from '@mui/material';
// Types
import {Flight, FlightListParamsTypes, Guest, ReservationDetails} from './services/type';
// Components
import FlightBookingSteps from './components/booking_stepper';
import {FlightListQuery} from './services/query.ts';

const steps = ['جستجوی پرواز', 'انتخاب پرواز', 'افزودن مهمان', 'تایید رزرو'];

const FlightBooking = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [flights, setFlights] = useState<Flight[]>([]);
    const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
    const [guests, setGuests] = useState<Guest[]>([{name: '', age: 0}]);
    const [reservationDetails, setReservationDetails] = useState<ReservationDetails | null>(null);
    const [searchParams, setSearchParams] = useState<FlightListParamsTypes>({
        origin: '',
        destination: '',
        date: ''
    });

    const {data: flightListData} = FlightListQuery(searchParams);
    const handleSearch = () => {
        const isSearchFilled = searchParams.origin || searchParams.destination || searchParams.date;
        if (isSearchFilled) {

            if (flightListData?.data) {
                setFlights(flightListData?.data);
            }
        } else {
            setFlights(flightListData?.data);
        }
        setActiveStep(1);
    };

    const handleSelectFlight = (flight: Flight) => {
        setSelectedFlight(flight);
        setActiveStep(2);
    };

    const handleAddGuest = () => {
        setGuests([...guests, {name: '', age: 0}]);
    };

    const handleGuestChange = (index: number, field: 'name' | 'age', value: string | number) => {
        const updatedGuests = [...guests];
        updatedGuests[index] = {...updatedGuests[index], [field]: value};
        setGuests(updatedGuests);
    };

    const calculateTotalPrice = () => (selectedFlight ? selectedFlight.price * guests.length : 0);

    const handleReserve = () => {
        if (selectedFlight && guests.length > 0) {
            setReservationDetails({flight: selectedFlight, guests, totalPrice: calculateTotalPrice()});
            setActiveStep(3);
        } else {
            alert('لطفا پرواز و مهمان‌ها را وارد کنید.');
        }
    };

    const handleReset = () => {
        setActiveStep(0);
        setFlights([]);
        setSelectedFlight(null);
        setSearchParams({origin: '', destination: '', date: ''});
        setGuests([{name: '', age: 0}]);
        setReservationDetails(null);
    };

    return (
        <Grid2 container spacing={2} sx={{p: {md: 2, xs: 1}}} dir="rtl">
            <Grid2 size={{xs: 12}}>
                <Typography variant="h4">رزرو پرواز</Typography>
            </Grid2>
            <Grid2 size={{xs: 12}}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Grid2>
            <Grid2 size={{xs: 12}}>
                <FlightBookingSteps
                    activeStep={activeStep}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    handleSearch={handleSearch}
                    flights={flights}
                    handleSelectFlight={handleSelectFlight}
                    guests={guests}
                    handleGuestChange={handleGuestChange}
                    handleAddGuest={handleAddGuest}
                    handleReserve={handleReserve}
                    reservationDetails={reservationDetails}
                    handleReset={handleReset}
                />
            </Grid2>
        </Grid2>
    );
};

export default FlightBooking;
