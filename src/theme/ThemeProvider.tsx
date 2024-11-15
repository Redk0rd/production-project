import { FC, useMemo, useState, ReactNode } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
	children: ReactNode;
}

const defaultTheme = 
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
