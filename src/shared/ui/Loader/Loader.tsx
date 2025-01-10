import { ClassNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={ClassNames('lds-ring', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
