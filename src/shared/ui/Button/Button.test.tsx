import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
	test('test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
	test('have className', () => {
		render(<Button theme={ThemeButton.ClEAR} >TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug()
	});
});
