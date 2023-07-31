import { faker } from '@faker-js/faker';
import {
	Avatar,
	Box,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import StyledBadge from './StyledBadge';
import {
	ArrowDownLeft,
	ArrowUpRight,
	Phone,
	VideoCamera,
} from 'phosphor-react';

const CallLogElement = ({ online = true, incoming = false, missed = true }) => {
	const theme = useTheme();

	return (
		<>
			<Box
				sx={{
					width: '100%',
					borderRadius: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? '#fff'
							: theme.palette.background.paper,
				}}
				p={2}
			>
				<Stack
					direction={'row'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Stack direction="row" alignItems="center" spacing={2}>
						{online ? (
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
								variant="dot"
							>
								<Avatar
									src={faker.image.avatar()}
									alt={faker.person.fullName()}
								/>
							</StyledBadge>
						) : (
							<Avatar
								src={faker.image.avatar()}
								alt={faker.person.fullName()}
							/>
						)}
						<Stack spacing={0.3}>
							<Typography variant="subtitle2">
								{faker.person.fullName()}
							</Typography>
							<Stack direction={'row'} spacing={1} alignItems={'center'}>
								{incoming ? (
									<ArrowDownLeft
										color={
											missed
												? theme.palette.error.main
												: theme.palette.success.main
										}
									/>
								) : (
									<ArrowUpRight
										color={
											missed
												? theme.palette.error.main
												: theme.palette.success.main
										}
									/>
								)}
								<Typography variant="caption">Yesterday 21:15</Typography>
							</Stack>
						</Stack>
					</Stack>
					<IconButton>
						<Phone color={theme.palette.success.main} />
					</IconButton>
				</Stack>
			</Box>
		</>
	);
};

const CallElement = ({ online = true }) => {
	const theme = useTheme();

	return (
		<>
			<Box
				sx={{
					width: '100%',
					borderRadius: 1,
					backgroundColor: (theme) =>
						theme.palette.mode === 'light'
							? '#fff'
							: theme.palette.background.paper,
				}}
				p={2}
			>
				<Stack
					direction={'row'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Stack direction="row" alignItems="center" spacing={2}>
						{online ? (
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
								variant="dot"
							>
								<Avatar
									src={faker.image.avatar()}
									alt={faker.person.fullName()}
								/>
							</StyledBadge>
						) : (
							<Avatar
								src={faker.image.avatar()}
								alt={faker.person.fullName()}
							/>
						)}
						<Stack spacing={0.3}>
							<Typography variant="subtitle2">
								{faker.person.fullName()}
							</Typography>
						</Stack>
					</Stack>
					<Stack direction={'row'} alignItems={'center'} spacing={1}>
						<IconButton>
							<Phone color={theme.palette.success.main} />
						</IconButton>
						<IconButton>
							<VideoCamera color={theme.palette.success.main} />
						</IconButton>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

export { CallElement, CallLogElement };
