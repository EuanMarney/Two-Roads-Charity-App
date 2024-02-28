import React from 'react';
import { render } from '@testing-library/react-native';
import HomeLayout from '../../components/Layout/HomeLayout';
import { Text } from 'react-native';
import background from '../../assets/background.png';

// Mock child components and assets
jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/Footer', () => 'Footer');
jest.mock('../../assets/background.png', () => ({ uri: 'path/to/background.png' }));

describe('HomeLayout', () => {
    it('renders correctly', () => {
      const { getByText, getByTestId } = render(<HomeLayout navigation={{}}><Text>Test Child</Text></HomeLayout>);
      expect(getByText('Test Child')).toBeTruthy(); // Check if children render
      expect(getByTestId('header')).toBeTruthy(); // Assuming you have testID='header' in your Header component
      expect(getByTestId('footer')).toBeTruthy(); // Assuming you have testID='footer' in your Footer component
      // Add more assertions here
    });

    it('renders background image', () => {
      const { getByTestId } = render(<HomeLayout navigation={{}}><Text>Test Child</Text></HomeLayout>);
      const backgroundImage = getByTestId('backgroundImage');
      expect(backgroundImage).toBeTruthy();
      expect(backgroundImage.props.source).toEqual({ uri: 'path/to/background.png' });
    });
    
    it('passes navigation prop to Header', () => {
      const navigation = {};
      const { getByTestId } = render(<HomeLayout navigation={navigation}><Text>Test Child</Text></HomeLayout>);
      expect(getByTestId('header').props.navigation).toEqual(navigation);
    });

    it('renders children inside ScrollView', () => {
        const { getByText } = render(<HomeLayout navigation={{}}><Text>Test Child</Text></HomeLayout>);
        expect(getByText('Test Child')).toBeTruthy();
      });

});