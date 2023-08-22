import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from '@/app/components/SearchInput';

describe('SearchInput component', () => {
  test('should calls onSearch prop when input changes', () => {
    const mockOnSearch = jest.fn();
    render(<SearchInput onSearch={mockOnSearch} />);

    const inputElement = screen.getByTestId('mobile-search-job');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  test('displays mobile input by default', () => {
    render(<SearchInput onSearch={() => {}} />);

    const mobileInput = screen.getByTestId('mobile-search-job');
    const desktopInput = screen.queryByTestId('desktop-search-job');

    expect(mobileInput).toBeInTheDocument();
    expect(desktopInput).toBeInTheDocument();
  });

  test('should update the search term correctly when input value changes', () => {
    const mockOnSearch = jest.fn();
    render(<SearchInput onSearch={mockOnSearch} />);
    const input = screen.getByTestId('desktop-search-job');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('should call the onSearch callback with the correct search term when input value changes', () => {
    const mockOnSearch = jest.fn();
    render(<SearchInput onSearch={mockOnSearch} />);
    const input = screen.getByTestId('desktop-search-job');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  test('displays desktop input when screen size is not small', () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 1024,
      writable: true,
    });

    render(<SearchInput onSearch={() => {}} />);

    const mobileInput = screen.queryByTestId('mobile-search-job');
    const desktopInput = screen.getByTestId('desktop-search-job');

    expect(mobileInput).toBeInTheDocument();
    expect(desktopInput).toBeInTheDocument();

    // Resetting the window.innerWidth to its original value
    Object.defineProperty(window, 'innerWidth', {
      value: global.innerWidth,
      writable: false,
    });
  });
});
