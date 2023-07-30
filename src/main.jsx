import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';

// contexts
import SettingsProvider from './contexts/SettingsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<HelmetProvider>
		<ReduxProvider store={store}>
			<SettingsProvider>
				<App />
			</SettingsProvider>
		</ReduxProvider>
	</HelmetProvider>
);
