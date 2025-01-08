import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounter/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);
	const increment = () => {
		dispatch(counterActions.incremented());
	};

	const decrement = () => {
		dispatch(counterActions.decremented());
	};

	return (
		<div>
			<h1
				data-testid='value-title'
			>
				value: {counterValue}
			</h1>
			<Button
				data-testid='increment-btn'
				theme={ButtonTheme.OUTLINE} 
				onClick={increment}
			>
				+
			</Button>
			<Button 
				data-testid='decrement-btn'
				theme={ButtonTheme.OUTLINE} 
				onClick={decrement}
			>
				-
			</Button>
		</div>
	);
};
