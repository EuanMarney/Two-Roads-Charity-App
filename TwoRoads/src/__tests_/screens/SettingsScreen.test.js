import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../../screens/SettingsScreen';
import { removeAllUserData } from '../../database/dataRemovalUtil';
import { Alert } from 'react-native';

// Mock the `removeAllUserData` function
jest.mock('../../database/dataRemovalUtil', () => ({
    removeAllUserData: jest.fn(),
  }));

// Mock Alert
jest.spyOn(Alert, 'alert');

describe('SettingsScreen', () => {
  const mockNavigate = jest.fn();

  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows an alert when Reset Data button is pressed and handles user confirmation', async () => {
    const { getByText } = render(<SettingsScreen navigation={{ navigate: mockNavigate }} />);
    const resetButton = getByText('Reset Data');
    fireEvent.press(resetButton);

    // Verify that the Alert was called
    expect(Alert.alert).toHaveBeenCalled();

    const yesButton = Alert.alert.mock.calls[0][2][1].onPress;
    yesButton();

    expect(removeAllUserData).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('WelcomePage');
  });

  it('removes all user data when user confirms', async () => {
    const { getByText } = render(<SettingsScreen navigation={{ navigate: mockNavigate }} />);
    const resetButton = getByText('Reset Data');
    fireEvent.press(resetButton);

    const yesButton = Alert.alert.mock.calls[0][2][1].onPress;
    await yesButton();

    expect(removeAllUserData).toHaveBeenCalled();
  });

  it('navigates to WelcomePage when user confirms', async () => {
    const { getByText } = render(<SettingsScreen navigation={{ navigate: mockNavigate }} />);
    const resetButton = getByText('Reset Data');
    fireEvent.press(resetButton);

    const yesButton = Alert.alert.mock.calls[0][2][1].onPress;
    await yesButton();

    expect(mockNavigate).toHaveBeenCalledWith('WelcomePage');
  });
});
