import { ClassNames } from 'shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div className={ClassNames(classes.NotFoundPage, {}, [className])}>
        Страница не найдена
    </div>
);
