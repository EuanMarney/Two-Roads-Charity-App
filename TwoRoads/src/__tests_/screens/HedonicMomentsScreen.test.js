import { render,fireEvent, waitFor} from "@testing-library/react-native";
import React from "react";

import HedonicMomentsScreen from "../../screens/InputScreens/HedonicMomentsScreen";

// Combine the mocks for useNavigation and useRoute
jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            // Add other navigation functions that your component uses
        }),
        useRoute: () => ({
            params: {
                // Mock any params your component might use
            },
        }),
    };
});

describe("HedonicMomentsScreen", () => {
    // Test if the HedonicMomentsScreen component renders
    it("renders correctly", () => {
            const { getByTestId } = render(<HedonicMomentsScreen />);
            // Ensure that "hedonic-moments-screen" testID exists in your component
            const hedonicMomentsScreen = getByTestId("hedonic-moments-screen");
            expect(hedonicMomentsScreen).toBeTruthy();
    });

     // Tests if the text input fields for the first, second, and third connection acts are rendered and accept input correctly.
    it("renders text input fields for the first, second, third and fourth Hedonic Moment", () => {
        const { getByPlaceholderText } = render(<HedonicMomentsScreen/>);
        const firstHedonicMoment = getByPlaceholderText("Describe the first moment...");
        const secondHedonicMoment = getByPlaceholderText("Describe the second moment...");
        const thirdHedonicMoment = getByPlaceholderText("Describe the third moment...");
        const fourthHedonicMoment = getByPlaceholderText("Describe the fourth moment...");

        expect(firstHedonicMoment).toBeTruthy();
        expect(secondHedonicMoment).toBeTruthy();
        expect(thirdHedonicMoment).toBeTruthy();
        expect(fourthHedonicMoment).toBeTruthy();
    });

    // Tests if entering text in the hedonic moment input fields correctly updates component state.
    it("updates component state when text is entered in the input fields", () => {
        const { getByPlaceholderText } = render(<HedonicMomentsScreen/>);
        const firstHedonicMoment = getByPlaceholderText("Describe the first moment...");
        const secondHedonicMoment = getByPlaceholderText("Describe the second moment...");
        const thirdHedonicMoment = getByPlaceholderText("Describe the third moment...");
        const fourthHedonicMoment = getByPlaceholderText("Describe the fourth moment...");

        fireEvent.changeText(firstHedonicMoment, "First Hedonic Moment");
        fireEvent.changeText(secondHedonicMoment, "Second Hedonic Moment");
        fireEvent.changeText(thirdHedonicMoment, "Third Hedonic Moment");
        fireEvent.changeText(fourthHedonicMoment, "Fourth Hedonic Moment");

        expect(firstHedonicMoment.props.value).toBe("First Hedonic Moment");
        expect(secondHedonicMoment.props.value).toBe("Second Hedonic Moment");
        expect(thirdHedonicMoment.props.value).toBe("Third Hedonic Moment");
        expect(fourthHedonicMoment.props.value).toBe("Fourth Hedonic Moment");
    });

    // Tests if the submit button is rendered correctly.
    it("renders the submit button", () => {
        const { getByTestId } = render(<HedonicMomentsScreen/>);
        const submitButton = getByTestId("submit-button");
        expect(submitButton).toBeTruthy();
    });

    // Tests if the KeyboardAvoidingView behaves correctly on different platforms (iOS vs. Android).
    it("renders the KeyboardAvoidingView", () => {
        const { getByTestId } = render(<HedonicMomentsScreen/>);
        const keyboardAvoidingView = getByTestId("keyboard-avoiding-view");
        expect(keyboardAvoidingView).toBeTruthy();
    });

    // Tests if the background image is rendered correctly in the component.
    it("renders the background image", () => {
        const { getByTestId } = render(<HedonicMomentsScreen/>);
        const backgroundImage = getByTestId("background-image");
        expect(backgroundImage).toBeTruthy();
    });

});
