import { useCallback, useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);
	const onOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	return (
		<div className={ClassNames(cls.Navbar, {}, [className])}>
			<LoginModal isOpen={isAuthModal} OnClose={onCloseModal} />
			<div className={cls.links}>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.authBtn}
					onClick={onOpenModal}
				>
					Войти
				</Button>
			</div>
		</div>
	);
};
