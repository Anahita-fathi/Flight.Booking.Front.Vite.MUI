// Main
import {Box, TextField, Button, Typography} from '@mui/material';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';
// Config
import {routes} from '../../../configs/routes/default';
// Services
import {loginApi} from '../../../configs/axois/instance.ts';


interface LoginFormInputs {
    email: string;
    password: string;
}

// Validation Schema
const schema = yup.object().shape({
    email: yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
    password: yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد').required('رمز عبور الزامی است'),
});

const Login = () => {
    const {control, handleSubmit} = useForm<LoginFormInputs>({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data: LoginFormInputs) => {
        console.log('Form data submitted:', data); // Log form data to check what is being submitted
        try {
            const response = await loginApi({username: 'admin', password: 'password'});
            navigate(routes.flights.flights.path);
            console.log('ورود موفق:', response);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box width={350} p={3} boxShadow={3} borderRadius={2} bgcolor="white">
                <Typography variant="h5" textAlign="center" mb={2}>
                    ورود به حساب کاربری
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({field, fieldState}) => (
                            <TextField
                                {...field}
                                label="ایمیل"
                                fullWidth
                                margin="normal"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({field, fieldState}) => (
                            <TextField
                                {...field}
                                label="رمز عبور"
                                type="password"
                                fullWidth
                                margin="normal"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt: 2}}>
                        ورود
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Login;
