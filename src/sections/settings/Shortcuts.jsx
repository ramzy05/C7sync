import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	Slide,
	Stack,
	Typography,
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const list = [
	{
		title: 'Mark as unread',
		combination: ['Cmd', 'Shift', 'U'],
	},
	{
		title: 'Mute',
		combination: ['Cmd', 'Shift', 'M'],
	},
	{
		title: 'Archive Chat',
		combination: ['Cmd', 'Shift', 'E'],
	},
	{
		title: 'Delete Chat',
		combination: ['Cmd', 'Shift', 'D'],
	},
	{
		title: 'Pin Chat',
		combination: ['Cmd', 'Shift', 'P'],
	},
	{
		title: 'Search',
		combination: ['Cmd', 'F'],
	},
	{
		title: 'Search Chat',
		combination: ['Cmd', 'Shift', 'F'],
	},
	{
		title: 'Next Chat',
		combination: ['Cmd', 'N'],
	},
	{
		title: 'Next Step',
		combination: ['Ctrl', 'Tab'],
	},
	{
		title: 'Previous Step',
		combination: ['Ctrl', 'Shift', 'Tab'],
	},
	{
		title: 'New Group',
		combination: ['Cmd', 'Shift', 'N'],
	},
	{
		title: 'Profile & About',
		combination: ['Cmd', 'P'],
	},
	{
		title: 'Increase speed of voice message',
		combination: ['Shift', '.'],
	},
	{
		title: 'Decrease speed of voice message',
		combination: ['Shift', ','],
	},
	{
		title: 'Settings',
		combination: ['Shift', 'S'],
	},
	{
		title: 'Emoji Panel',
		combination: ['Cmd', 'E'],
	},
	{
		title: 'Sticker Panel',
		combination: ['Cmd', 'S'],
	},
];

const Shortcuts = ({ open, handleClose }) => {
	return (
		<>
			<Dialog
				fullWidth
				maxWidth="md"
				open={open}
				onClose={handleClose}
				keepMounted
				TransitionComponent={Transition}
				sx={{ p: 4 }}
			>
				<DialogTitle>Keyboard Shortcuts</DialogTitle>
				<DialogContent sx={{ mt: 4 }}>
					<Grid container spacing={3}>
						{list.map(({ title, combination }, id) => {
							return (
								<Grid item key={id} xs={6}>
									<Stack
										sx={{ width: '100%' }}
										direction="row"
										alignItems={'center'}
										justifyContent={'space-between'}
										spacing={3}
									>
										<Typography variant="caption" sx={{ fontSize: 14 }}>
											{title}
										</Typography>
										<Stack spacing={2} direction="row">
											{combination.map((el, id) => {
												return (
													<Button
														key={id}
														disabled
														variant="contained"
														sx={{ color: '#212121' }}
													>
														{el}
													</Button>
												);
											})}
										</Stack>
									</Stack>
								</Grid>
							);
						})}
					</Grid>
				</DialogContent>
        <DialogActions>
            <Button variant='contained' onClick={handleClose}>
              OK
            </Button>
        </DialogActions>
			</Dialog>
		</>
	);
};
export default Shortcuts;
