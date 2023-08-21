import MobileMenu from '@/app/components/MobileMenu';
import NavBar from '@/app/components/NavBar';
import { render, fireEvent, screen } from '@testing-library/react';

describe('NavBar', () => {
  test('renders NavBar component', () => {
    render(<NavBar />);
    const navBarElement = screen.getByTestId('navbar__nav');
    expect(navBarElement).toBeInTheDocument();
  });
  // // test('sets mobileMenuOpen state to false when mobile menu is closed', () => {
  // //   render(<NavBar />);
  // //   const mobileMenuButton = screen.getByTestId('mobile-menu-button');
  // //   fireEvent.click(mobileMenuButton);
  // // });
  // test('sets mobileMenuOpen state to true when mobile menu button is clicked', () => {
  //   const setMobileMenuOpen = jest.fn();
  //   render(
  //     <MobileMenu
  //       navigation={[{ name: 'Home', href: '/' }]}
  //       mobileMenuOpen={true}
  //       setMobileMenuOpen={setMobileMenuOpen}
  //     />
  //   );
  //   const mobileMenuButton = getByTestId('navbar__mobile-menu-button');

  //   fireEvent.click(mobileMenuButton);

  //   // Assert that the mobileMenuOpen state is true
  //   expect(mobileMenuButton).toHaveClass('active');
  // });
  // // test('sets mobileMenuOpen state to false when mobile menu is closed', () => {
  // //   render(<NavBar />);
  // //   const mobileMenuButton = getByTestId('mobile-menu-button');
  // //   fireEvent.click(mobileMenuButton);
  // //   fireEvent.click(mobileMenuButton);
  // //   // Add your assertions here
  // // });
  // // test('sets mobileMenuOpen state to true when mobile menu button is clicked', () => {
  // //   const { getByTestId } = render(<NavBar />);
  // //   const mobileMenuButton = getByTestId('mobile-menu-button');
  // //   fireEvent.click(mobileMenuButton);
  // //   // Assert that the mobileMenuOpen state is true
  // //   expect(mobileMenuButton).toHaveClass('active');
  // // });
});
