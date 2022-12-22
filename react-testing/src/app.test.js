import { render, screen } from '@testing-library/react';

import App from './app';

test('App initialization test', () => {
  render(<App />);

  const mainPage = screen.getByTestId('main-page');
  const helloWorldElement = screen.getByText('Hello World!');
  const testButton = screen.getByTestId('test-button');
  const testLabel = screen.getByLabelText('test');
  const testInput = screen.getByPlaceholderText('test value');

  expect(mainPage).toMatchSnapshot();
  expect(helloWorldElement).toBeInTheDocument();
  expect(testButton).toBeInTheDocument();
  expect(testLabel).toBeInTheDocument();
  expect(testInput).toBeInTheDocument();
});
