import { useNavigation, useRoute } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import InputScreenHeader from '../../components/Header/inputScreenHeader';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('InputScreenHeader', () => {
  it('renders without crashing', () => {
    useRoute.mockReturnValue({ name: 'Test Route' });
    const { getByTestId } = render(<InputScreenHeader headerStyles={{}} />);
    expect(getByTestId('input-screen-header')).toBeTruthy();
  });

  it('displays the correct route name', () => {
    useRoute.mockReturnValue({ name: 'Test Route' });
    const { getByText } = render(<InputScreenHeader headerStyles={{}} />);
    expect(getByText('Test Route')).toBeTruthy();
  });

  it('navigates to home when cross icon is pressed', () => {
    const navigate = jest.fn();
    useNavigation.mockReturnValue({ navigate });
    useRoute.mockReturnValue({ name: 'Test Route' });
    const { getByTestId } = render(<InputScreenHeader headerStyles={{}} />);
    fireEvent.press(getByTestId('cross-button'));
    expect(navigate).toHaveBeenCalledWith('Home');
  });
});