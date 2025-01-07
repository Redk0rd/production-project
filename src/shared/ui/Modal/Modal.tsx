import { MouseEvent, ReactNode, useCallback } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			onClose();
		}
	},[]);

	const onContentClick = useCallback((event: MouseEvent) => {
		event.stopPropagation();
	}, []);

	return (
		<Portal>
			<div className={ClassNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
