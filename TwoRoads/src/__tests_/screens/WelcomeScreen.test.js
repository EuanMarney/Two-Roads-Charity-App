import { NavigationContext } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import WelcomePage from '../../screens/WelcomePage';

describe('WelcomePage', () => {
  const mockNavigate = jest.fn();

  // Mock the navigation prop typically provided by React Navigation
  const navigationMock = {
    navigate: mockNavigate,
  };

  it('renders correctly', () => {
    const { getByText, getAllByText } = render(
      <NavigationContext.Provider value={navigationMock}>
        <WelcomePage navigation={navigationMock} />
      </NavigationContext.Provider>
    );

    // Check if the title and descriptions are present
    expect(getByText('Welcome to The Two Roads Charity App')).toBeTruthy();
    expect(
      getAllByText(/Your companion for mental well-being./i).length
    ).toBeGreaterThan(0);
    expect(
      getAllByText(/To begin, create an account and set up a personal passcode to keep your entries secure./i)
        .length
    ).toBeGreaterThan(0);

    // Check if the Get Started button is present
    expect(getByText('Get Started')).toBeTruthy();
  });

  it('navigates to RegisterScreen when Get Started is pressed', () => {
    const { getByText } = render(
      <NavigationContext.Provider value={navigationMock}>
        <WelcomePage navigation={navigationMock} />
      </NavigationContext.Provider>
    );

    const getStartedButton = getByText('Get Started');
    fireEvent.press(getStartedButton);

    // Check if the navigate function was called with 'RegisterScreen'
    expect(mockNavigate).toHaveBeenCalledWith('RegisterScreen');
  });
});
