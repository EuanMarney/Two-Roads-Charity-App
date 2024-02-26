import React from 'react';
import { render } from '@testing-library/react-native';
import Footer from '../../components/Footer';

// The test checks if the Footer component renders correctly.
describe('Footer', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<Footer />); // The test renders the Footer component.
  
      expect(getByTestId('footer-container')).toBeTruthy(); // The test checks if the footer-container is rendered.
      expect(getByTestId('footer-image')).toBeTruthy(); // The test checks if the footer-image is rendered.
    });
  });
  
