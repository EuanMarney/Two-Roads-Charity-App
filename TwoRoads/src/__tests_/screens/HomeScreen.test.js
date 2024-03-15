import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import HomeScreen from '../../screens/HomeScreen';

// Mock the navigation prop
const mockNavigation = {
    navigate: jest.fn(),
  };

describe('HomeScreen', () => {
    // Test if the HomeScreen component renders
    it('renders correctly', () => {
        const { getByTestId } = render(<HomeScreen navigation={mockNavigation} />);
        const homeScreen = getByTestId('home-screen');
        expect(homeScreen).toBeTruthy();
    });

    // Test if the buttons on the home screen navigate to the correct screens
    it('navigates to the correct screens when buttons are pressed', () => {
        const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
        const gratitudeDiaryButton = getByText('Gratitude Diary');
        const actsOfKindnessButton = getByText('Acts of Kindness');
        const hedonicMomentsButton = getByText('Hedonic Moments');
        const actsOfConnectionButton = getByText('Acts of Connection');
        const dailyMindfulnessButton = getByText('Daily Mindfulness');
        const calendarButton = getByText('Calendar');

        fireEvent.press(gratitudeDiaryButton);
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Gratitude Diary');

        fireEvent.press(actsOfKindnessButton);
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Acts of Kindness');

        fireEvent.press(hedonicMomentsButton);
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Hedonic Moments');

        fireEvent.press(actsOfConnectionButton);
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Acts of Connection');

        fireEvent.press(dailyMindfulnessButton);
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Daily Mindfulness');

        fireEvent.press(calendarButton);
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Calendar');
    });

    // Test if the buttons on the home screen are rendered
    it('renders buttons on the home screen', () => {
        const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
        const gratitudeDiaryButton = getByText('Gratitude Diary');
        const actsOfKindnessButton = getByText('Acts of Kindness');
        const hedonicMomentsButton = getByText('Hedonic Moments');
        const actsOfConnectionButton = getByText('Acts of Connection');
        const dailyMindfulnessButton = getByText('Daily Mindfulness');
        const calendarButton = getByText('Calendar');

        expect(gratitudeDiaryButton).toBeTruthy();
        expect(actsOfKindnessButton).toBeTruthy();
        expect(hedonicMomentsButton).toBeTruthy();
        expect(actsOfConnectionButton).toBeTruthy();
        expect(dailyMindfulnessButton).toBeTruthy();
        expect(calendarButton).toBeTruthy();
    });

    // Test if the buttons on the home screen have the correct text
    it('buttons on the home screen have the correct text', () => {
        const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
        const gratitudeDiaryButton = getByText('Gratitude Diary');
        const actsOfKindnessButton = getByText('Acts of Kindness');
        const hedonicMomentsButton = getByText('Hedonic Moments');
        const actsOfConnectionButton = getByText('Acts of Connection');
        const dailyMindfulnessButton = getByText('Daily Mindfulness');
        const calendarButton = getByText('Calendar');

        expect(gratitudeDiaryButton.props.children).toBe('Gratitude Diary');
        expect(actsOfKindnessButton.props.children).toBe('Acts of Kindness');
        expect(hedonicMomentsButton.props.children).toBe('Hedonic Moments');
        expect(actsOfConnectionButton.props.children).toBe('Acts of Connection');
        expect(dailyMindfulnessButton.props.children).toBe('Daily Mindfulness');
        expect(calendarButton.props.children).toBe('Calendar');
    });
});