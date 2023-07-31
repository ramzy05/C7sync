import {
	Box,
	Divider,
	IconButton,
	Link,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { CustomScrollBar } from '../../components/Scrollbar';
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from '../../components/Search';
import { useState } from 'react';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { CallLogElement } from '../../components/CallElement';
import { CallLogs } from '../../data';
import StartCall from '../../sections/main/StartCall';

const Call = () => {
	const theme = useTheme();
	const [openDialog, setOpenDialog] = useState(false);
	const handleCloseDialog =()=>{
		setOpenDialog(false)
	}

	return (
		<>
			<Stack
				direction="row"
				sx={{
					width: '100%',
					borderRadius: 1,
				}}
			>
				{/* Left */}
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
					<Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
						<Stack>
							<Typography variant="h5">Call Log</Typography>
						</Stack>
						<Stack sx={{ width: '100%' }}>
							<Search>
								<SearchIconWrapper>
									<MagnifyingGlass color="#709CE6" />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search..."
									inputProps={{ 'aria-label': 'search' }}
								/>
							</Search>
						</Stack>
						<Stack
							direction="row"
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<Typography variant="subtitle2" component={Link}>
								Start Call
							</Typography>
							<IconButton
								onClick={() => {
									setOpenDialog(true);
								}}
							>
								<Plus size={22} style={{ color: theme.palette.primary }} />
							</IconButton>
						</Stack>
						<Divider />

						<Stack
							direction="column"
							sx={{
								flexGrow: 1,
								overflow: 'hidden',
								height: '100%',
							}}
						>
							<CustomScrollBar>
								<Stack spacing={2.4}>
									
									{/* Call Logs */}
                  {CallLogs.map((el,id)=>(
                    <CallLogElement key={id} {...el}   />
                  ))}

								</Stack>
							</CustomScrollBar>
						</Stack>
					</Stack>
				</Box>

				{/* Right */}
				{/* // TODO => Reuse Conversation Components */}
			</Stack>
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
		</>
	);
};
export default Call;
