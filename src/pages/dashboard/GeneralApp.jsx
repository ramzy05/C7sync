import { Box, Stack, useTheme } from '@mui/material';
import Chats from './Chats';
import Conversation from '../../components/Conversation';
import Contact from '../../components/Contact';
import { useSelector } from 'react-redux';
import SharedMessages from '../../components/SharedMessages';
import StarredMessages from '../../components/StarredMessages';

const GeneralApp = () => {
  const theme = useTheme() 
	const { sidebar }  =  useSelector(store=>store.app)

	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* Chats */}
			<Chats />

			<Box
				sx={{
          height: '100%',
					width: sidebar.open?'calc(100vw - 740px)':'calc(100vw - 420px)',
					backgroundColor: theme.palette.mode==='light'? '#F0F4FA':theme.palette.background.paper,
				}}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
				{/* Contacts */}
				{sidebar.open && (()=>{
					switch (sidebar.type) {
						case 'CONTACT':
							return <Contact />

						case 'STARRED':
							
							return <StarredMessages />
							break;
						case 'SHARED':
							return <SharedMessages />
						
						default:
							break;
					}
				})()}
		</Stack>
	);
};

export default GeneralApp;
