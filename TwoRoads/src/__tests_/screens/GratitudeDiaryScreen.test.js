import { render,fireEvent} from "@testing-library/react-native";
import React from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

import GratitudeDiary from "../../screens/InputScreens/GratitudeDiaryScreen";


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

describe("GratitudeDiary", () => {
    // Test if the GratitudeDiary component renders
    it ("renders correctly", () => {
        const { getByTestId } = render(<GratitudeDiary />);
        const gratitudeDiaryScreen = getByTestId("gratitude-diary-screen");
        expect(gratitudeDiaryScreen).toBeTruthy();
    });

    // Tests if the text input fields for the gratitude diary are rendered and accept input correctly.
    it("renders text input fields for the gratitude diary", () => {
        const { getByPlaceholderText, getAllByPlaceholderText } = render(<GratitudeDiary />);
        const firstGrateful = getByPlaceholderText("Describe the first thing...");
        const secondGrateful = getByPlaceholderText("Describe the second thing...");
        const thirdGrateful = getByPlaceholderText("Describe the third thing...");
        
        // Use getAllByPlaceholderText to get all inputs with the same placeholder
        const whyInputs = getAllByPlaceholderText("Why did this happen...");
    
        // Assert that you got exactly 3 inputs for "Why did this happen..."
        expect(whyInputs.length).toBe(3);
    
        expect(firstGrateful).toBeTruthy();
        expect(secondGrateful).toBeTruthy();
        expect(thirdGrateful).toBeTruthy();
    
        expect(whyInputs[0]).toBeTruthy(); 
        expect(whyInputs[1]).toBeTruthy(); 
        expect(whyInputs[2]).toBeTruthy(); 
    });

    // Tests if entering text in the Gratitude diary input fields correctly updates component state.
    it("updates component state when text is entered in the input fields", () => {
        const { getByPlaceholderText, getAllByPlaceholderText} = render(<GratitudeDiary />);
        const firstGrateful = getByPlaceholderText("Describe the first thing...");
        const secondGrateful = getByPlaceholderText("Describe the second thing...");
        const thirdGrateful = getByPlaceholderText("Describe the third thing...");
        const whyInputs = getAllByPlaceholderText("Why did this happen...");

        fireEvent.changeText(firstGrateful, "First Grateful");
        fireEvent.changeText(secondGrateful, "Second Grateful");
        fireEvent.changeText(thirdGrateful, "Third Grateful");
        fireEvent.changeText(whyInputs[0], "First Why");
        fireEvent.changeText(whyInputs[1], "Second Why");
        fireEvent.changeText(whyInputs[2], "Third Why");

        expect(firstGrateful.props.value).toBe("First Grateful");
        expect(secondGrateful.props.value).toBe("Second Grateful");
        expect(thirdGrateful.props.value).toBe("Third Grateful");
        expect(whyInputs[0].props.value).toBe("First Why");
        expect(whyInputs[1].props.value).toBe("Second Why");
        expect(whyInputs[2].props.value).toBe("Third Why");
    });

    // Tests if the submit button is rendered correctly.
    it("renders the submit button", () => {
        const { getByTestId } = render(<GratitudeDiary />);
        const submitButton = getByTestId("submit-button");
        expect(submitButton).toBeTruthy();
    });

    // Tests if the KeyboardAvoidingView behaves correctly on different platforms (iOS vs. Android).
    it("renders the KeyboardAvoidingView", () => {
        const { getByTestId } = render(<GratitudeDiary />);
        const keyboardAvoidingView = getByTestId("keyboard-avoiding-view");
        expect(keyboardAvoidingView).toBeTruthy();
    });

    // Tests if the background image is rendered correctly in the component.
    it("renders the background image", () => {
        const { getByTestId } = render(<GratitudeDiary />);
        const backgroundImage = getByTestId("background-image");
        expect(backgroundImage).toBeTruthy();
    });
});


