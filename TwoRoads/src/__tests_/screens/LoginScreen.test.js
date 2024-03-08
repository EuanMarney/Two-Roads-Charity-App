import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from "../../screens/LoginScreen";
import * as SecureStore from 'expo-secure-store';

// Mocking external modules
jest.mock('expo-secure-store');

// Mock implementation for navigation
const mockNavigate = jest.fn();

// Utility function to render component with navigation prop
const renderLoginScreen = () => render(<LoginScreen navigation={{ navigate: mockNavigate }} />);

describe('LoginScreen', () => {
    beforeEach(() => {
      global.alert = jest.fn(); // Mock the alert function
      mockNavigate.mockClear();
      SecureStore.getItemAsync.mockClear();
  
      // Mocking SecureStore responses
      SecureStore.getItemAsync.mockImplementation((key) => {
        if (key === 'pin') return Promise.resolve('123456'); // Mock stored pin for testing
        if (key === 'username') return Promise.resolve('testUser');
        return Promise.resolve(null);
      });
    });
  
    it('navigates to Home on correct pin submission', async () => {
      const { getByText } = renderLoginScreen();
  
      // Simulate entering the correct pin
      "123456".split('').forEach(num => {
        fireEvent.press(getByText(num));
      });
  
      fireEvent.press(getByText('Submit'));
  
      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('Home');
      });
    });
  
    it('shows alert on incorrect pin submission', async () => {
      const { getByText } = renderLoginScreen();
  
      // Simulate entering an incorrect pin
      "654321".split('').forEach(num => {
        fireEvent.press(getByText(num));
      });
  
      fireEvent.press(getByText('Submit'));
  
      await waitFor(() => {
        expect(global.alert).toHaveBeenCalledWith("Pin does not match one in our database");
      });
    });
  
    it('navigates to RegisterScreen when Create an account is pressed', () => {
      const { getByText } = renderLoginScreen();
  
      fireEvent.press(getByText('Create an account'));
  
      expect(mockNavigate).toHaveBeenCalledWith('RegisterScreen');
    });
  });  