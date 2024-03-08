import React from 'react';
import { fireEvent, render, waitFor} from '@testing-library/react-native';
import * as SecureStore from 'expo-secure-store';
import PinScreenReg2 from '../../screens/RegisterScreens/PinScreenReg2';

jest.mock('expo-secure-store', () => ({
    setItemAsync: jest.fn(() => Promise.resolve()),
    getItemAsync: jest.fn(() => Promise.resolve("123456")), // Mock a default pin for testing
  }));
  

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

describe('PinScreenReg2', () => {
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
        const { getByText } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        expect(getByText('Enter your 6-digit passcode again')).toBeTruthy(); 
        expect(getByText('Submit')).toBeTruthy();
        expect(getByText("I can't log in")).toBeTruthy();
    });

    it('should render 6 circles', () => {
        const { getAllByTestId } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        expect(getAllByTestId('circle')).toHaveLength(6);
    });

    it('should render 10 numbers', () => {
        const { getAllByTestId } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        expect(getAllByTestId('number')).toHaveLength(10);
    });

    it('navigates to the next screen with a 6-digit pin', async () => {
        const { getByText } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        "123456".split('').forEach(num => {
            fireEvent.press(getByText(num.toString()));
        });
        fireEvent.press(getByText('Submit'));
    
        // Use waitFor to wait for the expectation to be met
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('Home');
            expect(global.alert).toHaveBeenCalledWith('Account Created');
        });
    });
    

    it('does not navigate to the next screen with less than 6-digit pin', () => {
        const { getByText } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        "12345".split('').forEach(num => {
            fireEvent.press(getByText(num.toString()));
        });
        fireEvent.press(getByText('Submit'));
        expect(global.alert).toHaveBeenCalledWith('Please enter a 6-digit pin');
    });
});
