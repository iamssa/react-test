import React, { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ModalChangeItems } from './ModalChangeItems';
import { WidgetProvider } from '../../contexts/widget/WidgetProvider';

describe('ModalChangeItems component', () => {
  const customRender = (ui: ReactNode) => {
    return render(
      <WidgetProvider>{ui}</WidgetProvider>
    )
  }
  const component = <ModalChangeItems modalState={true} setModalState={() => {}} />;

  test('successfully renders', () => {
    customRender(component);
  });

  test('renders header', () => {
    render(component);
    const header = screen.getByText(/Изменение элементов/i);
    expect(header).toBeInTheDocument();
  });

  test('render empty items list by search', () => {
    customRender(component);
    const input = screen.getByPlaceholderText('Имя элемента');
    fireEvent.change(input, {target: {value: 'values without matches'}})

    expect(screen.getByText('Have no items')).toBeVisible();
  });

  test('correct filter work', () => {
    customRender(component);
    const select = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'select' && content.startsWith('');
    });
    fireEvent.click(select);

    const option = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'option' && content.startsWith('Номер больше 200');
    });
    fireEvent.click(option);

    expect(screen.queryByLabelText('Элемент номер 99')).not.toBeInTheDocument();
  });
});

