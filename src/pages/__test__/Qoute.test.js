// test qoute
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Testing Qoute', () => {
  test('should render correctly', () => {
    render(<Quote />);
  });
});
test('should have a length of 1', () => {
  const { getAllByText } = render(<Quote />);
  const text = getAllByText(/Mathematics is the study of numbers, shapes, and patterns./);
  expect(text).toHaveLength(1);
});
it('fisrt snap shot test', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
