import { fireEvent, render } from '@testing-library/react-native';
import * as SecureStore from 'expo-secure-store';
import React from 'react';

import PinScreenReg1 from '../../screens/RegisterScreens/PinScreenReg1';

jest.mock('expo-secure-store', () => ({
  setItemAsync: jest.fn(() => Promise.resolve()), 
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

describe('PinScreenReg1', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        SecureStore.setItemAsync.mockClear();
    });

    beforeAll(() => {
        global.alert = jest.fn();
    });
      
    afterAll(() => {
        global.alert.mockRestore();
    });

    it('should render without errors', () => {
        const { getByText } = render(<PinScreenReg1 navigation={{ navigate: mockNavigate }} />);
        expect(getByText('Enter your 6-digit passcode')).toBeTruthy(); 
    });

    it('should render 6 circles', () => {
        const { getAllByTestId } = render(<PinScreenReg1 navigation={{ navigate: mockNavigate }} />);
        expect(getAllByTestId('circle')).toHaveLength(6);
    });

    it('should render 10 numbers', () => {
        const { getAllByTestId } = render(<PinScreenReg1 navigation={{ navigate: mockNavigate }} />);
        expect(getAllByTestId('number')).toHaveLength(10);
    });

    it('navigates to the next screen with a 6-digit pin', async () => {
        const { getByText } = render(<PinScreenReg1 navigation={{ navigate: mockNavigate }} />);
        "123456".split('').forEach(num => {
            fireEvent.press(getByText(num.toString()));
        });
        fireEvent.press(getByText('Submit'));
        expect(SecureStore.setItemAsync).toHaveBeenCalledWith('pin', '123456');
        expect(mockNavigate).toHaveBeenCalledWith('PinScreenReg2');
    });
    
    it('does not navigate to the next screen with less than 6-digit pin', () => {
        const { getByText } = render(<PinScreenReg1 navigation={{ navigate: mockNavigate }} />);
        "12345".split('').forEach(num => {
            fireEvent.press(getByText(num.toString()));
        });
        fireEvent.press(getByText('Submit'));
        expect(global.alert).toHaveBeenCalledWith("Please enter a 6-digit pin");
        expect(mockNavigate).not.toHaveBeenCalled();
    });
});
