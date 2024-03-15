import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Keyboard } from 'react-native';

import BLeaveTextBox from '../../components/interactiveComps/ButtonToLeaveTextBox';

jest.mock('react-native', () => {
  const rn = jest.requireActual('react-native');
  rn.Keyboard.dismiss = jest.fn();
  return rn;
});

describe('BLeaveTextBox', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<BLeaveTextBox />);
    expect(getByTestId('button-leave-textbox')).toBeTruthy();
  });

  it('calls Keyboard.dismiss when button is pressed', () => {
    const { getByTestId } = render(<BLeaveTextBox />);
    fireEvent.press(getByTestId('dismiss-keyboard-button'));
    expect(Keyboard.dismiss).toHaveBeenCalled();
  });

  it('should call the function to leave the text box', () => {
    const mockLeaveTextBox = jest.fn();
    const { getByText } = render(<BLeaveTextBox leaveTextBox={mockLeaveTextBox} />);
    fireEvent.press(getByText('Exit')); 
    expect(mockLeaveTextBox).toHaveBeenCalled();
  });

});
