import { render, fireEvent, waitFor } from '@testing-library/react-native';
import * as SecureStore from 'expo-secure-store';
import React from 'react';

import Header from '../../components/Header';


jest.mock('expo-secure-store');

describe('Header', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Header title="Test Title" navigation={{ navigate: jest.fn() }} />);
    expect(getByTestId('header-component')).toBeTruthy();
  });

  it('displays the correct title', () => {
    const { getByText } = render(<Header title="Test Title" navigation={{ navigate: jest.fn() }} />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('fetches the username from secure store', async () => {
    SecureStore.getItemAsync.mockResolvedValue('TestUser');
    const { getByText } = render(<Header title="Test Title" navigation={{ navigate: jest.fn() }} />);
    await waitFor(() => expect(getByText('TestUser')).toBeTruthy());
  });

  it('navigates to settings when settings icon is pressed', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<Header title="Test Title" navigation={{ navigate }} />);
    fireEvent.press(getByTestId('settings-button'));
    expect(navigate).toHaveBeenCalledWith('Settings');
  });

    it('renders the date', () => {
        const { getByTestId } = render(<Header title="Test Title" navigation={{ navigate: jest.fn() }} />);
        expect(getByTestId('date')).toBeTruthy();
    });
});