import { Box, Stack, useTheme } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import Message from './Message';
import { CustomScrollBar } from '../Scrollbar';

const Conversation = () => {
	const theme = useTheme();

	return (
		<Stack height="100%" maxHeight="100vh" width="auto">
			{/* Chat Header */}
			<Header />

			{/* Msg */}
			<CustomScrollBar paddingBottom={'0px'} sx={{
				width: '100%',
				flexGrow: 1,
				height: '100%',
			}}>
				<Message />
			</CustomScrollBar>

			{/* Chat Footer */}
			<Footer />
		</Stack>
	);
};

export default Conversation;
