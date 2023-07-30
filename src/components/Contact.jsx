import {
	Avatar,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	IconButton,
	Slide,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import {
	Bell,
	CaretRight,
	Phone,
	Prohibit,
	Star,
	Trash,
	VideoCamera,
	X,
} from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar, UpdateSidebarType } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import AntSwitch from './AntSwitch';
import { CustomScrollBar } from './Scrollbar';
import React, { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>Block this contact</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Are you sure you want to block this contact?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Yes</Button>
			</DialogActions>
		</Dialog>
	);
};

const DeleteDialog = ({ open, handleClose }) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>Delete this chat</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Are you sure you want to delete this chat?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Yes</Button>
			</DialogActions>
		</Dialog>
	);
};

const Contact = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const handleCloseBlock =()=>{
    setOpenBlock(false)
  }

  const handleCloseDelete=()=>{
    setOpenDelete(false)
  }

	return (
		<Box sx={{ width: 320, height: '100vh' }}>
			<Stack sx={{ height: '100%' }}>
				{/* Header */}
				<Box
					sx={{
						boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
						width: '100%',
						backgroundColor:
							theme.palette.mode === 'light'
								? '#F8FAFF'
								: theme.palette.background,
					}}
				>
					<Stack
						sx={{ height: '100%', p: 2 }}
						direction="row"
						alignItems={'center'}
						justifyContent={'space-between'}
						spacing={3}
					>
						<Typography variant="subtitle2">Contact Info</Typography>
						<IconButton
							onClick={() => {
								dispatch(ToggleSidebar());
							}}
						>
							<X />
						</IconButton>
					</Stack>
				</Box>

				{/* Body */}
				<CustomScrollBar alwaysVisible={true} paddingBottom={'0px'}>
					<Stack
						sx={{ height: '100%', position: 'relative', flexGrow: 1 }}
						p={3}
						spacing={3}
					>
						<Stack alignItems={'center'} direction="row" spacing={2}>
							<Avatar
								alt={faker.person.fullName()}
								src={faker.image.avatar()}
								sx={{ height: 64, width: 64 }}
							/>
							<Stack spacing={0.5}>
								<Typography variant="article" fontWeight={600}>
									{faker.person.fullName()}
								</Typography>
								<Typography variant="body2" fontWeight={500}>
									{'+237 675 564 000'}
								</Typography>
							</Stack>
						</Stack>
						<Stack
							direction="row"
							alignItems={'center'}
							justifyContent={'space-evenly'}
						>
							<Stack spacing={1} alignItems={'center'}>
								<IconButton>
									<Phone />
								</IconButton>
								<Typography variant="overline">Voice</Typography>
							</Stack>
							<Stack spacing={1} alignItems={'center'}>
								<IconButton>
									<VideoCamera />
								</IconButton>
								<Typography variant="overline">Video</Typography>
							</Stack>
						</Stack>
						<Divider />
						<Stack spacing={0.5}>
							<Typography variant="article">About</Typography>
							<Typography variant="body2">Busy right now 😴</Typography>
						</Stack>
						<Divider />
						<Stack
							direction="row"
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<Typography variant="subtitle2">Media, Links & Docs</Typography>
							<Button
								onClick={() => {
									dispatch(UpdateSidebarType('SHARED'));
								}}
								endIcon={<CaretRight />}
							>
								401
							</Button>
						</Stack>
						<Stack direction="row" spacing={2} alignItems={'center'}>
							{[1, 2, 3].map((el, id) => (
								<Box key={id}>
									<img
										src={faker.image.urlLoremFlickr({ category: 'food' })}
										alt={faker.person.fullName()}
									/>
								</Box>
							))}
						</Stack>
						<Divider />
						<Stack
							direction="row"
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<Stack direction="row" spacing={2}>
								<Star size={20} />
								<Typography variant="subtitle2">Starred Message</Typography>
							</Stack>
							<IconButton
								onClick={() => {
									dispatch(UpdateSidebarType('STARRED'));
								}}
							>
								<CaretRight />
							</IconButton>
						</Stack>
						<Divider />
						<Stack
							direction="row"
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<Stack direction="row" spacing={2}>
								<Bell size={20} />
								<Typography variant="subtitle2">Mute Notifications</Typography>
							</Stack>
							<AntSwitch />
						</Stack>
						<Divider />
						<Typography variant="subtitle2">1 group in common</Typography>
						<Stack alignItems={'center'} direction="row" spacing={2}>
							<Avatar
								alt={faker.person.fullName()}
								src={faker.image.avatar()}
							/>
							<Stack spacing={0.5}>
								<Typography variant="subtitle2" fontWeight={600}>
									{faker.person.fullName()}
								</Typography>
								<Typography variant="caption" fontWeight={500}>
									Owl, Rabbit, Parrot, You
								</Typography>
							</Stack>
						</Stack>
						<Stack direction={'row'} alignItems={'center'} pb={3} spacing={2}>
							<Button onClick={()=>{
                setOpenBlock(true)
              }} startIcon={<Prohibit />} variant="outlined" fullWidth>
								Block
							</Button>
							<Button onClick={()=>{
                setOpenDelete(true)
              }} startIcon={<Trash />} variant="outlined" fullWidth>
								Delete
							</Button>
						</Stack>
					</Stack>
				</CustomScrollBar>
			</Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} /> }
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete} /> }
		</Box>
	);
};
export default Contact;
