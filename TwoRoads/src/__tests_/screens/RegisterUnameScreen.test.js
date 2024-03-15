import { fireEvent, render } from '@testing-library/react-native';
import * as SecureStore from 'expo-secure-store';
import React from 'react';

import RegisterScreen from '../../screens/RegisterScreens/RegisterUnameScreen';


jest.mock('expo-secure-store', () => ({
    setItemAsync: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
}));

describe('RegisterScreen', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render without errors', () => {
        const { getByText, getByPlaceholderText } = render(<RegisterScreen />);
    
        expect(getByText('Welcome')).toBeTruthy(); 
        expect(getByPlaceholderText('Enter Username')).toBeTruthy(); 
        expect(getByText('Submit')).toBeTruthy(); 
      });
    

    it('should allow entering a username', () => {
        const { getByPlaceholderText } = render(<RegisterScreen />);
        const input = getByPlaceholderText('Enter Username');
        fireEvent.changeText(input, 'testuser');
        expect(input.props.value).toBe('testuser');
    });

    it('should save username and navigate when submitting', async () => {
        const { getByText, getByPlaceholderText } = render(
            <RegisterScreen navigation={{ navigate: mockNavigate }} />
        );
        const input = getByPlaceholderText('Enter Username');
        fireEvent.changeText(input, 'testuser');
        const button = getByText('Submit');
        fireEvent.press(button);

        expect(SecureStore.setItemAsync).toHaveBeenCalledWith('username', 'testuser');
        expect(mockNavigate).toHaveBeenCalledWith('PinScreenReg1');
    });
});
