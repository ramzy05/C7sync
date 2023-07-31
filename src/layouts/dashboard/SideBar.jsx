import { useState } from 'react';
import {
	useTheme,
	Box,
	Stack,
	IconButton,
	Divider,
	Avatar,
	Menu,
	MenuItem,
} from '@mui/material';
import { Gear } from 'phosphor-react';
import { faker } from '@faker-js/faker';

import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons, Profile_Menu } from '../../data';
import useSettings from '../../hooks/useSettings';
import AntSwitch from '../../components/AntSwitch';
import { useNavigate } from 'react-router-dom';

const getPath = (index) => {
	switch (index) {
		case 0:
			return '/app';
		case 1:
			return '/group';
		case 2:
			return '/call';
		case 3:
			return '/settings';

		default:
			break;
	}
};

const getMenuPath = (index) => {
	switch (index) {
		case 0:
			return '/profile';
		case 1:
			return '/settings';
		case 2:
			// TODO => Update token & set isAuth = false
			return '/auth/login';

		default:
			break;
	}
};

const SideBar = () => {
	const [selected, setSelected] = useState(0);
	const theme = useTheme();
	const navigate = useNavigate();
	const { onToggleMode } = useSettings();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (id) => {
		navigate(getMenuPath(id));
		setAnchorEl(null);
	};

	return (
		<Box
			p={2}
			sx={{
				backgroundColor: theme.palette.background.paper,
				boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
				height: '100vh',
				width: 100,
			}}
		>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="space-between"
				sx={{ width: '100%', height: '100%' }}
				spacing={3}
			>
				<Stack alignItems="center" spacing={4}>
					<Box
						sx={{
							backgroundColor: theme.palette.primary.main,
							height: 64,
							width: 64,
							borderRadius: 1.5,
						}}
					>
						<img src={Logo} alt="C7sync Logo" />
					</Box>
					<Stack
						sx={{ width: 'max-content' }}
						direction="column"
						alignItems="center"
						spacing={3}
					>
						{Nav_Buttons.map((el) =>
							el.index === selected ? (
								<Box
									key={el.index}
									p={1}
									sx={{
										backgroundColor: theme.palette.primary.main,
										borderRadius: 1.5,
									}}
								>
									<IconButton
										sx={{ width: 'max-content', color: '#fff' }}
										key={el.index}
									>
										{el.icon}
									</IconButton>
								</Box>
							) : (
								<IconButton
									onClick={() => {
										setSelected(el.index);
										navigate(getPath(el.index));
									}}
									sx={{
										width: 'max-content',
										color:
											theme.palette.mode === 'light'
												? '#000'
												: theme.palette.text.primary,
									}}
									key={el.index}
								>
									{el.icon}
								</IconButton>
							)
						)}
						<Divider sx={{ width: '48px' }} />
						{selected === 3 ? (
							<Box
								p={1}
								sx={{
									backgroundColor: theme.palette.primary.main,
									borderRadius: 1.5,
								}}
							>
								<IconButton sx={{ width: 'max-content', color: '#fff' }}>
									<Gear />
								</IconButton>
							</Box>
						) : (
							<IconButton
								sx={{
									width: 'max-content',
									color:
										theme.palette.mode === 'light'
											? '#000'
											: theme.palette.text.primary,
								}}
								onClick={() => {
									setSelected(3);
									navigate(getPath(3));
								}}
							>
								<Gear />
							</IconButton>
						)}
					</Stack>
				</Stack>

				<Stack
					// alignItems='center'
					spacing={4}
				>
					<AntSwitch
						onChange={() => {
							onToggleMode();
						}}
						defaultChecked={theme.palette.mode === 'light'}
					/>
					<Avatar
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						src={faker.image.avatar()}
					/>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
					>
						<Stack spacing={1} px={1}>
							{Profile_Menu.map((el, id) => (
								<MenuItem key={id} onClick={() => handleClose(id)}>
									<Stack
										sx={{
											width: 100,
										}}
										direction={'row'}
										alignItems={'center'}
										justifyContent={'space-between'}
									>
										<span>{el.title}</span>
										{el.icon}
									</Stack>
								</MenuItem>
							))}
						</Stack>
					</Menu>
				</Stack>
			</Stack>
		</Box>
	);
};

export default SideBar;
