import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('intentional failing test for CI/CD testing', () => {
  render(<App />);
  // This test will fail because the text "Production Deployment" doesn't exist in App component
  const deploymentButton = screen.getByText(/Production Deployment/i);
  expect(deploymentButton).toBeInTheDocument();
});
