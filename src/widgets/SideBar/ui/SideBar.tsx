import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import MainIcon from 'shared/assets/icons/MainIcon.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(true);

	const userLocation = useLocation();
	const isCurrentPage = (path: string) => userLocation.pathname === path;

	const onOpen = () => setCollapsed(false);
	const onClose = () => setCollapsed(true);

	return (
		<div
			data-testid="sidebar"
			className={ClassNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
			onMouseEnter={onOpen}
			onMouseLeave={onClose} 
		>
			{/* <Button
				theme={ButtonTheme.CLEAR}
				data-testid="sidebar-toggle"
				onClick={onClose}
				className={cls.collapsedBtn}
			>
				{collapsed ? '>>>' : '<<<'}
			</Button> */}

			<div className={cls.items}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={ClassNames(cls.item, {
						[cls.activePage]: isCurrentPage(RoutePath.main),
					})}
				>
					<MainIcon className={cls.icon} />
					{collapsed ? '' : <span className={cls.link}>Main</span>}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.PRIMARY}
					to={RoutePath.about}
					className={ClassNames(cls.item, {
						[cls.activePage]: isCurrentPage(RoutePath.about),
					})}
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
