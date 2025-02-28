import { FC, type ReactNode } from 'react';

import Meta from '@modules/common/components/Meta';
import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import s from './Layout.module.scss';
const theme = createTheme({
	palette: {
		primary: {
			main: '#001D87',
		},
	},
});

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Meta />
			<ThemeProvider theme={theme}>
				<main className={s.container}>
					<Header />
					{children}
					<Footer />
				</main>
			</ThemeProvider>
		</>
	);
};

export default Layout;
