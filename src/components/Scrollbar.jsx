// import PropTypes from 'prop-types';
// import SimpleBarReact from 'simplebar-react';
// // @mui
// import { alpha, styled } from '@mui/material/styles';
// import { Box } from '@mui/material';

// // ----------------------------------------------------------------------

// const RootStyle = styled('div')(() => ({
//   flexGrow: 1,
//   height: '100%',
//   overflow: 'scroll',
// }));

// const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
//   // maxHeight: '100%',
//   '& .simplebar-scrollbar': {
//     '&:before': {
//       backgroundColor: alpha(theme.palette.grey[600], 0.48),
//     },
//     '&.simplebar-visible:before': {
//       opacity: 1,
//     },
//   },
//   '& .simplebar-track.simplebar-vertical': {
//     width: 10,
//   },
//   '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
//     height: 6,
//   },
//   '& .simplebar-mask': {
//     zIndex: 'inherit',
//   },
//   "& .simplebar-placeholder": {
//     height: '0 !important',
//   }
// }));

// // ----------------------------------------------------------------------

// Scrollbar.propTypes = {
//   children: PropTypes.node.isRequired,
//   sx: PropTypes.object,
// };

// export default function Scrollbar({ children, sx, ...other }) {
//   const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

//   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

//   if (isMobile) {
//     return (
//       <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
//         {children}
//       </Box>
//     );
//   }

//   return (
//     <RootStyle>
//       <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
//         {children}
//       </SimpleBarStyle>
//     </RootStyle>
//   );
// }

// export {SimpleBarStyle};
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
	flexGrow: 1,
	height: '100%',
	overflow: 'scroll',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
	// maxHeight: '100%',
	'& .simplebar-scrollbar': {
		'&:before': {
			backgroundColor: alpha(theme.palette.grey[600], 0.48),
		},
		'&.simplebar-visible:before': {
			opacity: 1,
		},
	},
	'& .simplebar-track.simplebar-vertical': {
		width: 10,
	},
	'& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
		height: 6,
	},
	'& .simplebar-mask': {
		zIndex: 'inherit',
	},
	'& .simplebar-placeholder': {
		height: '0 !important',
	},
}));

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
	children: PropTypes.node.isRequired,
	sx: PropTypes.object,
};

export default function Scrollbar({ children, sx, ...other }) {
	const userAgent =
		typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			userAgent
		);

	if (isMobile) {
		return (
			<Box sx={{ overflowX: 'auto', ...sx }} {...other}>
				{children}
			</Box>
		);
	}

	return (
		<RootStyle>
			<SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
				{children}
			</SimpleBarStyle>
		</RootStyle>
	);
}

export const CustomScrollBar = ({
	children,
	sx = {},
	alwaysVisible = false,
	paddingBottom='20px'
}) => {
	const [showScrollbar, setShowScrollbar] = useState(alwaysVisible);
	const theme = useTheme();

	const handleMouseEnter = () => {
		setShowScrollbar(true);
	};

	const handleMouseLeave = () => {
		setShowScrollbar(false);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				overflowY: 'scroll',
				height: '100%',
				paddingRight: '8px',
				paddingBottom: paddingBottom,
				'&::-webkit-scrollbar': {
					width: '6px',
				},
				'&::-webkit-scrollbar-track': {
					background: showScrollbar
						? theme.palette.background.paper
						: 'transparent',
				},
				'&::-webkit-scrollbar-thumb': {
					background: showScrollbar
						? theme.palette.primary.main
						: 'transparent',
					transition: 'background 0.8s',
				},
				...sx,
			}}
			onMouseEnter={() => {
				if (!alwaysVisible) handleMouseEnter();
			}}
			onMouseLeave={() => {
				if (!alwaysVisible) handleMouseLeave();
			}}
		>
			{children}
		</Box>
	);
};

export { SimpleBarStyle };
