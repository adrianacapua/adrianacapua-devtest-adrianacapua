import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Form from '../../../src/components/molecule/Form';

describe('Task #3', () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<Form onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId('form-test'));
  expect(onSubmit).toHaveBeenCalled();
});