import NavBar from '@/app/components/NavBar';
import { render, screen } from '@testing-library/react';

describe('NavBar', () => {
  test('renders NavBar component', () => {
    render(<NavBar />);
    const navBarElement = screen.getByTestId('navbar__nav');
    expect(navBarElement).toBeInTheDocument();
  });
});
