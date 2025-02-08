import { ClassNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	OnClose: () => void;
}

export const LoginModal = ({ className, isOpen, OnClose }: LoginModalProps) => (
	<Modal
		isOpen={isOpen}
		onClose={OnClose}
		className={ClassNames(cls.LoginModal, {}, [className])}
	>
		<LoginForm />
	</Modal>
);
