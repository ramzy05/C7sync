import { Link, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm';

const ResetPassword = () => {
	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
				<Typography variant="h3" align="center" paragraph>
					Forgot your password?
				</Typography>
				<Typography sx={{ color: 'text.primary' }}>
					Please enter the email address associated with your account and we
					will send you a link to reset you password.
				</Typography>

				{/* Reset Password Form */}
				<ResetPasswordForm />

				<Link
					to="/auth/login"
					color="inherit"
					component={RouterLink}
					variant="subtitle2"
					sx={{
						mt: 3,
						mx: 'auto',
						alignItems: 'center',
						display: 'inline-flex',
					}}
				>
					<CaretLeft />
					Return to Sign In page
				</Link>
			</Stack>
		</>
	);
};
export default ResetPassword;
