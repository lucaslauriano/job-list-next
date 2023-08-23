import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '@/app/components/NoFound';

describe('NotFound Component', () => {
  it('should renders the 404 text', () => {
    render(<NotFound />);
    const notFoundText = screen.getByText(/404/i);
    expect(notFoundText).toBeInTheDocument();
  });

  it('should renders the page not found heading', () => {
    render(<NotFound />);
    const heading = screen.getByText(/Page not found/i);
    expect(heading).toBeInTheDocument();
  });

  it('should renders the page not found message', () => {
    render(<NotFound />);
    const message = screen.getByText(
      /Sorry, we couldn’t find the page you’re looking for./i
    );
    expect(message).toBeInTheDocument();
  });

  it('should renders the "Go back home" link', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Go back home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  it('should applies correct styling to the "Go back home" link', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Go back home/i });
    expect(link).toHaveClass('bg-indigo-600');
    expect(link).toHaveClass('text-white');
  });
});
