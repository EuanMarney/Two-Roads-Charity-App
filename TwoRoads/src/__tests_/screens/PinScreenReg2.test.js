import { fireEvent, render, waitFor} from '@testing-library/react-native';
import * as SecureStore from 'expo-secure-store';
import React from 'react';

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

    it('should alert "those pins did not match" and clear the pin if the entered pin is incorrect', async () => {
        SecureStore.getItemAsync.mockResolvedValue('654321');  // Mock stored pin as different
        const { getByText } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        "123456".split('').forEach(num => {
            fireEvent.press(getByText(num.toString()));
        });
        fireEvent.press(getByText('Submit'));
    
        await waitFor(() => {
            expect(global.alert).toHaveBeenCalledWith('those pins did not match');
        });
    }); 
    

    it('should delete the last digit of the pin when delete is pressed', async () => {
        const { getByText, findByTestId } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        "123456".split('').forEach(num => {
            fireEvent.press(getByText(num.toString()));
        });  // Add a digit to the pin
        const deleteButton = await findByTestId('deleteButton');
        for (let i = 0; i < 6; i++){
            fireEvent.press(deleteButton);  // Press the delete button
        };

        fireEvent.press(getByText('Submit'));
        expect(global.alert).toHaveBeenCalledWith('Please enter a 6-digit pin');
        
    });

    it('should add "0" to the pin when the 0 button is pressed', async () => {
        const { getByText } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        const zeroButton = getByText('0');
        for(let i = 0; i < 4; i++){
        fireEvent.press(zeroButton);  // Press the 0 button
        }
        
        fireEvent.press(getByText('Submit'));
        expect(global.alert).toHaveBeenCalledWith('Please enter a 6-digit pin');
    });

    it('should say implemeny passowrd recovery', async () => {
        const { getByText, findByTestId } = render(<PinScreenReg2 navigation={{ navigate: mockNavigate }} />);
        "123456".split('').forEach(num => {
            fireEvent.press(getByText(num.toString()));
        }); 
        const zeroButton = getByText('0');
        for(let i = 0; i < 4; i++){
        fireEvent.press(zeroButton);  // Press the 0 button
        }

        const resetPwordButton = await findByTestId('ForgottenPwrd');
        fireEvent.press(resetPwordButton);
    });
    
});
