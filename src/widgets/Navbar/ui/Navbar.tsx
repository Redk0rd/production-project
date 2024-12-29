import { useCallback, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal(prev => !prev);
	},[]);

	return (
		<div className={ClassNames(cls.Navbar, {}, [className])}>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
				deleniti?
			</Modal>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={'/'}
					className={cls.mainLink}
				>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
					О сайте
				</AppLink>
				<Button
					theme={ButtonTheme.BACKGROUND_INVERTED}
					className={cls.authBtn}
					onClick={onToggleModal}
				>
					Войти
				</Button>
			</div>
		</div>
	);
};
