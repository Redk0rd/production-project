import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';


describe('SideBar', () => {
  test('test render', () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<SideBar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    
    // Проверяем, что на старте класс collapsed присутствует
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    // Совершаем клик по кнопке
    fireEvent.click(toggleBtn);

    // Проверяем, что класс collapsed был удален
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    

  });
});