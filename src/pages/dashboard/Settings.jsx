import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { CustomScrollBar } from '../../components/Scrollbar';
import {
	Bell,
	CaretLeft,
	Image,
	Info,
	Key,
	Keyboard,
	Lock,
	Note,
	PencilCircle,
} from 'phosphor-react';
import { faker } from '@faker-js/faker';
import Shortcuts from '../../sections/settings/Shortcuts';
import { useState } from 'react';

const Settings = () => {
	const theme = useTheme();
  const [openShorcuts, setOpenShortcuts] = useState(false)

  const handleOpenShorcuts =()=>{
    setOpenShortcuts(true)
  }

  const handleCloseShortcuts =()=>{
    setOpenShortcuts(false)
  }


	const list = [
		{
			icon: <Bell size={20} />,
			title: 'Notifications',
			onclick: () => {},
		},
		{
			icon: <Lock size={20} />,
			title: 'Privacy',
			onclick: () => {},
		},
		{
			icon: <Key size={20} />,
			title: 'Security',
			onclick: () => {},
		},
		{
			icon: <PencilCircle size={20} />,
			title: 'Theme',
			onclick: () => {},
			// onclick: handleOpenTheme
		},
		{
			icon: <Image size={20} />,
			title: 'Chat Wallpaer',
			onclick: () => {},
		},
		{
			icon: <Note size={20} />,
			title: 'Request Account Info',
			onclick: () => {},
		},
		{
			icon: <Keyboard size={20} />,
			title: 'Keyboard Shortcuts',
			onclick:handleOpenShorcuts
		},
		{
			icon: <Info size={20} />,
			title: 'Help',
			onclick: () => {},
		},
	];

	return (
		<>
			<Stack direction={'row'} sx={{ width: '100%' }}>
				{/* LeftPanel */}
				<Stack>
					{/* Header */}
					<Box
						p={5}
						height={110}
						sx={{
							backgroundColor:
								theme.palette.mode === 'light'
									? '#F8FAFF'
									: theme.palette.background,
							boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
						}}
					>
						<Stack direction="row" alignItems={'center'} spacing={3}>
							<IconButton>
								<CaretLeft size={24} color="#4B4B4B" />
							</IconButton>
							<Typography variant="h6">Settings</Typography>
						</Stack>
					</Box>

					<Box sx={{ height: 'calc(100vh - 110px)', width: '320px' }}>
						<CustomScrollBar
							sx={{
								backgroundColor:
									theme.palette.mode === 'light'
										? '#F8FAFF'
										: theme.palette.background,
								boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
							}}
						>
							<Stack p={4} spacing={4}>
								{/* Profile */}
								<Stack direction={'row'} spacing={3}>
									<Avatar
										sx={{ width: 56, height: 56 }}
										src={faker.image.avatar()}
										alt={faker.person.fullName()}
									/>
									<Stack spacing={0.5}>
										<Typography variant={'article'}>
											{faker.person.fullName()}
										</Typography>
										<Typography variant={'body'}>
											{faker.word.words(2)}
										</Typography>
									</Stack>
								</Stack>
								{/* List of options */}
								<Stack spacing={4}>
									{list.map(({ icon, title, onclick }, id) => {
										return (
											<Stack
												key={id}
												sx={{ cursor: 'pointer' }}
												onClick={onclick}
											>
												<Stack
													direction="row"
													spacing={2}
													alignItems={'center'}
												>
													{icon}
													<Typography variant="body2">{title}</Typography>
												</Stack>
												<br />
												{id !== list.length - 1 && <Divider />}
											</Stack>
										);
									})}
								</Stack>
							</Stack>
						</CustomScrollBar>
					</Box>
				</Stack>

				{/* RightPanel */}
			</Stack>
      <Shortcuts open={openShorcuts} handleClose={handleCloseShortcuts} />
		</>
	);
};
export default Settings;
