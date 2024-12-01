import { ButtonHTMLAttributes, FC } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
	ClEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = props => {
	const { className, children,theme, ...otherProps } = props;
	return (
		<button className={ClassNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};
