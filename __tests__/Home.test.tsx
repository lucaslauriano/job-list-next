import { fireEvent, render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page ', () => {
  describe('Rendering', () => {
    it('should have heading text', async () => {
      render(<Home />);

      const heading = screen.getByRole('heading', {
        name: /Find the best jobs./i,
      });
      fireEvent.click(screen.getByText('Visit the job posting page'));
      await screen.findByRole('heading');

      expect(heading).toBeInTheDocument();
      expect(screen.getByText(/Find the best jobs./i)).toBeInTheDocument();
    });
  });
});
