import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import SideBar from './SideBar'

const DashboardLayout = () => {
	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* SideBar */}
			<SideBar />
			<Outlet />
		</Stack>
	);
};

export default DashboardLayout;
