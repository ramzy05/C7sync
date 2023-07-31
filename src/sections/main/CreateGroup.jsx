import React from 'react';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Slide,
	Stack,
} from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
	FormProvider,
	RHFTextField,
	RHFAutocomplete,
} from '../../components/hook-form';

const MEMBERS = ['Name 1', 'Name 2', 'Name 3'];

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
	const NewGroupSchema = Yup.object({
		title: Yup.string().required('Subject is required'),
		members: Yup.array().min(2, 'Must have at least 2 members'),
	});

	const defaultValues = {
		title: '',
		members: [],
	};

	const methods = useForm({
		resolver: yupResolver(NewGroupSchema),
		defaultValues,
	});

	const {
		reset,
		watch,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
	} = methods;

	const onSubmit = async (data) => {
		try {
			// api call
			console.log('DATA', data);
		} catch (error) {
			console.log('error', error);
		}
	};

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				<RHFTextField sx={{ mt: 3 }} name="title" label="Subject" />
				<RHFAutocomplete
					name="members"
					label="Members"
					multiple
					freeSolo
					options={MEMBERS.map((option) => option)}
					ChipProps={{ size: 'medium' }}
				/>

				<Stack
					spacing={2}
					direction="row"
					alignItems={'center'}
					justifyContent={'flex-end'}
				>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit" variant="contained">
						Create
					</Button>
				</Stack>
			</Stack>
		</FormProvider>
	);
};

const CreateGroup = ({ open, handleClose }) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
			maxWidth="xs"
			fullWidth
			sx={{ p: 4 }}
		>
			{/* Title */}
			<DialogTitle>Create New Group</DialogTitle>

			{/* Content */}
			<DialogContent>
				<CreateGroupForm handleClose={handleClose} />
			</DialogContent>
		</Dialog>
	);
};
export default CreateGroup;