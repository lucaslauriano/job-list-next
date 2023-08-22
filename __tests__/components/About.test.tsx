import About from '@/app/components/About';
import { render, screen } from '@testing-library/react';

describe('About Component', () => {
  test('should renders component without errors', () => {
    render(<About />);
  });

  test('should renders the correct header text', () => {
    render(<About />);
    const headerElement = screen.getByText('About this project');
    expect(headerElement).toBeInTheDocument();
  });

  test('should renders the correct project description', () => {
    render(<About />);
    const descriptionElement = screen.getByText(
      'A simple job-list app with Next.js 13.4'
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test('should renders the correct URLs for XML and JSON', () => {
    render(<About />);
    const xmlLinkElement = screen.getByText('XML');
    const jsonLinkElement = screen.getByText('JSON');

    expect(xmlLinkElement).toHaveAttribute(
      'href',
      'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/'
    );
    expect(xmlLinkElement).toHaveAttribute('target', '_blank');

    expect(jsonLinkElement).toHaveAttribute(
      'href',
      'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json'
    );
    expect(jsonLinkElement).toHaveAttribute('target', '_blank');
  });

  test('should renders the correct use-case steps', () => {
    render(<About />);
    const userTypesUrlStep = screen.getByText(
      'User types a URL in the browser'
    );
    const userPresentedListStep = screen.getByText(
      'User is presented with a list of jobs'
    );
    const userInteractsStep = screen.getByText(
      'The user can interact with the jobs in the list and follow a link to the actual ads'
    );

    expect(userTypesUrlStep).toBeInTheDocument();
    expect(userPresentedListStep).toBeInTheDocument();
    expect(userInteractsStep).toBeInTheDocument();
  });
});
