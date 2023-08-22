import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer, { footerNavigation } from '@/app/components/Footer';

describe('Footer Component', () => {
  test('should renders navigation items correctly', () => {
    render(<Footer />);
    const linkElements = screen.getAllByRole('link');

    expect(linkElements).toHaveLength(footerNavigation.length);

    footerNavigation.forEach((item) => {
      const linkElement = screen.getByRole('link', { name: item.name });
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('should renders correct copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /© 2023 Lucas Lauriano, Inc. All rights reserved./i
    );
    expect(copyrightText).toBeInTheDocument();
  });

  test('should opens links in new tab', () => {
    render(<Footer />);
    const linkElements = screen.getAllByRole('link');

    linkElements.forEach((linkElement) => {
      expect(linkElement).toHaveAttribute('target', '_blank');
    });
  });
});
