import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../../../App'; // Adjust the import path to the location of your App component
import { connectToDatabase, createTables } from '../../database/db';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

// Mocking the necessary modules
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
}));

jest.mock('../../database/db', () => ({
  connectToDatabase: jest.fn(() => Promise.resolve('db_instance')),
  createTables: jest.fn(() => Promise.resolve()),
}));

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }) => <>{children}</>,
}));

jest.mock('../../navigations/StackNavigator', () => 'StackNavigator');

describe('App component', () => {
  it('initializes app correctly and hides splash screen', async () => {
    const { getByText } = render(<App />);

    // Check that the splash screen is prevented from hiding automatically
    expect(SplashScreen.preventAutoHideAsync).toHaveBeenCalled();

    await waitFor(() => {
      // Check that fonts are loaded
      expect(Font.loadAsync).toHaveBeenCalled();

      // Check database initialization calls
      expect(connectToDatabase).toHaveBeenCalled();
      expect(createTables).toHaveBeenCalled();

      // Ensure the splash screen is hidden after initialization
      expect(SplashScreen.hideAsync).toHaveBeenCalled();
    });
  });
});
