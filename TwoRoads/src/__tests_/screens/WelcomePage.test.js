import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Alert } from 'react-native';

import { removeAllUserData } from '../../database/dataRemovalUtil';
import SettingsScreen from '../../screens/WelcomePage';


// Mock the `removeAllUserData` function
jest.mock('../../database/dataRemovalUtil', () => ({
    removeAllUserData: jest.fn(),
  }));

// Mock Alert
jest.spyOn(Alert, 'alert');

// navigates to LoginScreen when Login button is pressed
describe('WelcomePage', () => {
    const mockNavigate = jest.fn();

  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // navigates to LoginScreen when Login button is pressed
    it('navigates to LoginScreen when Login button is pressed', () => {
        const { getByTestId } = render(<SettingsScreen navigation={{ navigate: mockNavigate }} />);
        const loginButton = getByTestId('login-button');
        fireEvent.press(loginButton);
        expect(mockNavigate).toHaveBeenCalledWith('LoginScreen');
    });

    // shows an alert when Register button is pressed and handles user confirmation
    it('shows an alert when Register button is pressed and handles user confirmation', async () => {
        const { getByTestId } = render(<SettingsScreen navigation={{ navigate: mockNavigate }} />);
        const registerButton = getByTestId('register-button');
        fireEvent.press(registerButton);

        // Verify that the Alert was called
        expect(Alert.alert).toHaveBeenCalled();

        const yesButton = Alert.alert.mock.calls[0][2][1].onPress;
        yesButton();

        expect(removeAllUserData).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('RegisterScreen');
    });

    // removes all user data when user confirms
    it('removes all user data when user confirms', async () => {
        const { getByTestId } = render(<SettingsScreen navigation={{ navigate: mockNavigate }} />);
        const registerButton = getByTestId('register-button');
        fireEvent.press(registerButton);

        const yesButton = Alert.alert.mock.calls[0][2][1].onPress;
        await yesButton();

        expect(removeAllUserData).toHaveBeenCalled();
    });

    // welcome message and welcome text are displayed
    it('welcome message and welcome text are displayed', () => {
        const { getByText } = render(<SettingsScreen navigation={{ navigate: mockNavigate }} />);
        const welcomeMessage = getByText('Welcome to The Two Roads Charity App');
        const welcomeText = getByText('Your companion for mental well-being. Track your gratitude, kindness, and daily moments of joy. Engage in acts of connection and mindfulness with our guided support.');
        expect(welcomeMessage).toBeTruthy();
        expect(welcomeText).toBeTruthy();
    });



});