import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from '@/app/components/SearchInput';

describe('SearchInput component', () => {
  test('should update the search term correctly when input value changes', () => {
    const onSearch = jest.fn();
    render(<SearchInput onSearch={onSearch} />);
    const input = screen.getByTestId('desktop-search-job');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('should call the onSearch callback with the correct search term when input value changes', () => {
    const onSearch = jest.fn();
    render(<SearchInput onSearch={onSearch} />);
    const input = screen.getByTestId('desktop-search-job');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(onSearch).toHaveBeenCalledWith('test');
  });
});
