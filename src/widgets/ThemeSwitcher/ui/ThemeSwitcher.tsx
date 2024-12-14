import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/LightIcon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button'


interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			theme={ThemeButton.ClEAR}
			className={ClassNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
		{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};