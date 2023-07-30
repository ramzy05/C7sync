import { useState } from 'react';
import { FormProvider, RHFTextField } from '../../components/hook-form';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink } from 'react-router-dom';
import {
	Alert,
	Button,
	Checkbox,
	IconButton,
	InputAdornment,
	Link,
	Stack,
	Typography,
} from '@mui/material';
import { Eye, EyeSlash } from 'phosphor-react';

const NewPasswordForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const NewPasswordSchema = Yup.object().shape({
		newPassword: Yup.string()
			.required('Password is required')
			.min(8, 'The password must be at least 6 caracters'),
		confirmPassword: Yup.string()
			.required('Password is required')
			.min(8, 'The password must be at least 6 caracters')
			.oneOf([Yup.ref('newPassword'), null], 'Password must match'),
	});

	const defaultValues = {
		newPassword: '',
		confirmPassword: '',
	};

	const methods = useForm({
		resolver: yupResolver(NewPasswordSchema),
		defaultValues,
	});

	const {
		reset,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = methods;

	const onSubmit = async () => {
		try {
			// submit data to backend
		} catch (error) {
			console.log(error);
			reset();
			setError('afterSubmit', {
				...error,
				message: error.message,
			});
		}
	};

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				{!!errors.afterSubmit && (
					<Alert severity="error">{errors.afterSubmit.message}</Alert>
				)}

				<RHFTextField
					name="newPassword"
					label="New Password"
					type={showPassword ? 'text' : 'password'}
				/>
				<RHFTextField
					name="confirmPassword"
					label="Confirm Password"
					type={showPassword ? 'text' : 'password'}
				/>
				<Stack direction={'row'} alignItems={'center'}>
					<Checkbox
						checked={showPassword}
						onChange={() => {
							setShowPassword(!showPassword);
						}}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<Typography sx={{ color: 'text.primary', fontSize: 14 }}>
						Show the values of the fields
					</Typography>
				</Stack>
				<Button
					fullWidth
					color="inherit"
					size="large"
					type="submit"
					variant="contained"
					sx={{
						bgcolor: 'text.primary',
						color: (theme) =>
							theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
						'&:hover': {
							bgcolor: 'text.primary',
							color: (theme) =>
								theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
						},
					}}
				>
					Reset
				</Button>
			</Stack>
		</FormProvider>
	);
};
export default NewPasswordForm;
