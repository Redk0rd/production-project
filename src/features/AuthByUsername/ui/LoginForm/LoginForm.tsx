import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => (
	<div className={ClassNames(cls.LoginForm, {}, [className])}>
		<div className={cls.label}>Войти</div>
		<input className={cls.input} type="text" />
		<input className={cls.input} type="text" />
		<Button className={cls.loginBtn}>Войти</Button>
	</div>
);
