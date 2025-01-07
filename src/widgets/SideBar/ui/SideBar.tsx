import { useState } from 'react';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './SideBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import MainIcon from 'shared/assets/icons/MainIcon.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

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
				theme={ButtonTheme.CLEAR}
				data-testid="sidebar-toggle"
			 	onClick={onToggle}
				className={cls.collapsedBtn}
			>
				{collapsed ? '>>>' : '<<<'}
			</Button>

			<div className={cls.items}>
			<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={cls.item}
				>
					<MainIcon className={cls.icon} />
					{collapsed ? '' : <span className={cls.link}>Main</span>}
				</AppLink>
				<AppLink 
					theme={AppLinkTheme.PRIMARY}
				 	to={RoutePath.about}
					 className={cls.item}
					>
					<AboutIcon className={cls.icon} />
					{collapsed ? '' : <span className={cls.link}>About</span>}
				</AppLink>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};
