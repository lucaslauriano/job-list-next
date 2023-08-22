import Home from '@/app/page';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('Home Page ', () => {
  test('should have heading text', async () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Find the best jobs./i,
    });
    fireEvent.click(screen.getByText('Visit the job posting page'));
    await screen.findByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(screen.getByText(/Find the best jobs./i)).toBeInTheDocument();
  });

  test('renders the "Visit the job posting page" link', () => {
    render(<Home />);

    const link = screen.getByRole('link', {
      name: /Visit the job posting page/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/jobs');
  });

  test('applies correct styling to the link', () => {
    render(<Home />);

    const link = screen.getByRole('link', {
      name: /Visit the job posting page/i,
    });
    expect(link).toHaveClass('bg-white/10');
    expect(link).toHaveClass('text-white');
  });
});
