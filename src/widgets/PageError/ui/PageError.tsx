import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const ReloadPAge = () => {
        location.reload();
    };
    return (
        <div className={ClassNames(cls.PageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <Button onClick={ReloadPAge}>Перезагрузить страницу</Button>
        </div>
    );
};
