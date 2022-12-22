import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import Fetch from './index';

jest.mock('axios');

// need for correct error about act()
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});
afterAll(() => {
  console.error = originalError;
});

describe('TEST FETCH COMPONENT', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Page loaded', () => {
    render(<Fetch />);

    expect(screen.getByText('Load ToDo')).toBeInTheDocument();
  });

  test('To do data loading', async () => {
    const user = userEvent.setup();

    axios.get.mockReturnValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 2,
          id: 2,
          title: 'delectus aut autem',
          completed: true,
        },
      ],
    });

    render(<Fetch />);

    expect(screen.queryByTestId('todo-data')).toBeNull();

    user.click(screen.getByText('Load ToDo'));

    await waitFor(() => {
      expect(screen.getAllByTestId('todo-item').length).toBe(2);
    });

    expect(screen.getByText('Ok')).toBeInTheDocument();
  });

  test('To do data error', async () => {
    const user = userEvent.setup();

    axios.get.mockRejectedValue(new Error('error'));

    render(<Fetch />);

    expect(screen.queryByTestId('todo-data')).toBeNull();

    user.click(screen.getByText('Load ToDo'));

    await waitFor(() => {
      expect(screen.getByText('Oops, failed to fetch!')).toBeInTheDocument();
    });
  });
});
