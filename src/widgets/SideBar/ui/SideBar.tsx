import { useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};

	return (
		<div
			data-testid='sidebar'
			className={ClassNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button
				theme={ButtonTheme.OUTLINE}
				data-testid="sidebar-toggle"
			 	onClick={onToggle}
			>
				{'>>>'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};
