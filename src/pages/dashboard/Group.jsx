import {
	Avatar,
	Badge,
	Box,
	Divider,
	IconButton,
	Link,
	Stack,
	Typography,
	styled,
	useTheme,
} from '@mui/material';
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { CustomScrollBar } from '../../components/Scrollbar';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';

const Group = () => {
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
							<Typography variant="h5">Groups</Typography>
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
								Create New Group
							</Typography>
							<IconButton>
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
									<Typography variant="subtitle2" sx={{ color: '#676767' }}>
										Pinned
									</Typography>
									{ChatList.filter((el) => el.pinned).map((el, id) => {
										return <ChatElement key={id} {...el} />;
									})}
								</Stack>
								<Stack spacing={2.4} marginTop={3}>
									<Typography variant="subtitle2" sx={{ color: '#676767' }}>
										All Groups
									</Typography>
									{ChatList.filter((el) => !el.pinned).map((el, id) => {
										return <ChatElement key={id} {...el} />;
									})}
								</Stack>
							</CustomScrollBar>
						</Stack>
					</Stack>
				</Box>

				{/* Right */}
        {/* // TODO => Reuse Conversation Components */}
			</Stack>
		</>
	);
};
export default Group;
