import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export default function App() {
	const { theme } = useTheme();

	return (
		<div className={ClassNames('app', {}, [theme])}>
			<Suspense fallback='loading'>
				<Navbar />
				<div className='content-page'>
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
}
