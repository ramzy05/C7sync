import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import ProfileForm from '../../sections/settings/ProfileForm';

const Profile = () => {
	const theme = useTheme();
	return (
		<>
			<Stack
				direction="row"
				sx={{
					width: '100%',
					borderRadius: 1,
				}}
			>
				<Box
					sx={{
						position: 'relative',
						width: 320,
						backgroundColor:
							theme.palette.mode === 'light'
								? '#F8FAFF'
								: theme.palette.background.default,
						boxShadow: '0px 0px 2px rgba(0, 0, 0,0.25)',
					}}
				>
					<Stack p={4} spacing={5}>
						{/* Header */}
						<Stack direction={'row'} alignItems={'center'} spacing={3}>
							<IconButton>
								<CaretLeft size={24} color="#484848" />
							</IconButton>
							<Typography variant="h5">Profile</Typography>
						</Stack>

            {/* Profile Form */}
            <ProfileForm />
					</Stack>
				</Box>
			</Stack>
		</>
	);
};
export default Profile;
