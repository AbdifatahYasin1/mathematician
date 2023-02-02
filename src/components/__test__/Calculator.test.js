import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Testing Calculator', () => {
  test('should render correctly', () => {
    render(<Calculator />);
  });
});

test('check textcontent of buttons', () => {
  const { getAllByRole } = render(<Calculator />);
  const buttons = getAllByRole('button');
  expect(buttons[0].textContent).toBe('AC');
});

it('fisrt snap shot test', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
