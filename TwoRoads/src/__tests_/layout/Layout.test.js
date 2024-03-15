import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import Layout from '../../components/Layout';


describe('Layout Component', () => {
    it('renders correctly', () => {
      const { getByText } = render(
        <Layout>
          <Text>Child Content</Text>
        </Layout>
      );
      expect(getByText('Child Content')).toBeTruthy();
    });

    it('includes the Footer component', () => {
        const { getByTestId } = render(<Layout><Text>Child Content</Text></Layout>);
        expect(getByTestId('footer-container')).toBeTruthy();
      });

    it('renders children inside the content View', () => {
        const { getByText } = render(<Layout><Text>Child Content</Text></Layout>);
        expect(getByText('Child Content')).toBeTruthy();
      });
});