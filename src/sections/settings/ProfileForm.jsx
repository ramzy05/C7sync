import { useCallback, useState } from 'react';
import { FormProvider, RHFTextField } from '../../components/hook-form';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, Stack } from '@mui/material';
import { Eye, EyeSlash } from 'phosphor-react';

const ProfileForm = () => {
	const ProfileSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		about: Yup.string().required('About is required'),
		avatarUrl: Yup.string().required('Avatar is required').nullable(true),
	});

	const defaultValues = {
		name: '',
		about: '',
	};

	const methods = useForm({
		resolver: yupResolver(ProfileSchema),
		defaultValues,
	});

	const {
		reset,
		watch,
		control,
		setValue,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = methods;

	const values = watch();

	const handleDrop = useCallback(
		(acceptedFiles) => {
			const file = acceptedFiles[0];

			const newFile = Object.assign(file, {
				preview: URL.createObjectURL(file),
			});

			if (file) {
				setValue('avatarUrl', newFile, { shouldValidate: true });
			}
		},
		[setValue]
	);

	const onSubmit = async (data) => {
		try {
			// submit data to backend
			console.log(data);
		} catch (error) {
			console.log(error);
			reset();
			setError('afterSubmit', {
				...error,
				message: error.message,
			});
		}
	};

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				<Stack spacing={3}>
					{!!errors.afterSubmit && (
						<Alert severity="error">{errors.afterSubmit.message}</Alert>
					)}
					<RHFTextField
						name="name"
						label="Name"
						helperText={'This name is visible to your contacts'}
					/>

					<RHFTextField
						name="about"
						label="About"
						multiline
						minRows={3}
						maxRows={5}
					/>
				</Stack>
				<Stack direction="row" justifyContent={'flex-end'}>
					<Button color="primary" size="large" type="submit" variant="outlined">
						Save
					</Button>
				</Stack>
			</Stack>
		</FormProvider>
	);
};
export default ProfileForm;
