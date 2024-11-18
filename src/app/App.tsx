import { useTheme } from 'app/providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export default function App() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={ClassNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>сменить тему</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<AppRouter />
		</div>
	);
}
