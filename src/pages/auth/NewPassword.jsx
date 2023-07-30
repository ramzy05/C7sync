import { Link, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import NewPasswordForm from '../../sections/auth/NewPasswordForm';

const NewPassword = () => {
	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
				<Typography variant="h3" align="center" paragraph>
					Reset password
				</Typography>
        <Typography sx={{color:'text.primary'}}>
          Please set your new password
        </Typography>
        {/* NewPasswordForm */}
        <NewPasswordForm />

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
export default NewPassword;
