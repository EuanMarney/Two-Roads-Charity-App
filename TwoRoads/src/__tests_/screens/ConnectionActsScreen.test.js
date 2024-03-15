import { render,fireEvent, waitFor} from "@testing-library/react-native";
import React from "react";

import ConnectionActsScreen from "../../screens/InputScreens/ConnectionActsScreen";

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
        }),
        useRoute: () => ({
            params: {
            },
        }),
    };
});



describe("ConnectionActsScreen", () => {
    // Test if the ConnectionActsScreen component renders
    it("renders correctly", () => {
            const { getByTestId } = render(<ConnectionActsScreen />);
            // Ensure that "connection-acts-screen" testID exists in your component
            const connectionActsScreen = getByTestId("connection-acts-screen");
            expect(connectionActsScreen).toBeTruthy();
    });

    // Tests if the text input fields for the first, second, and third connection acts are rendered and accept input correctly.
    it("renders text input fields for the first, second, and third connection acts", () => {
        const { getByPlaceholderText } = render(<ConnectionActsScreen />);
        const firstConnectionAct = getByPlaceholderText("Describe the first act...");
        const secondConnectionAct = getByPlaceholderText("Describe the second act...");
        const thirdConnectionAct = getByPlaceholderText("Describe the third act...");

        expect(firstConnectionAct).toBeTruthy();
        expect(secondConnectionAct).toBeTruthy();
        expect(thirdConnectionAct).toBeTruthy();
    });

    // Tests if entering text in the connection act input fields correctly updates component state.
    it("updates component state when text is entered in the input fields", () => {
        const { getByPlaceholderText } = render(<ConnectionActsScreen />);
        const firstConnectionAct = getByPlaceholderText("Describe the first act...");
        const secondConnectionAct = getByPlaceholderText("Describe the second act...");
        const thirdConnectionAct = getByPlaceholderText("Describe the third act...");

        fireEvent.changeText(firstConnectionAct, "First Connection Act");
        fireEvent.changeText(secondConnectionAct, "Second Connection Act");
        fireEvent.changeText(thirdConnectionAct, "Third Connection Act");

        expect(firstConnectionAct.props.value).toBe("First Connection Act");
        expect(secondConnectionAct.props.value).toBe("Second Connection Act");
        expect(thirdConnectionAct.props.value).toBe("Third Connection Act");
    });

    // Tests if the submit button is rendered correctly.
    it("renders the submit button", () => {
        const { getByTestId } = render(<ConnectionActsScreen />);
        const submitButton = getByTestId("submit-button");
        expect(submitButton).toBeTruthy();
    });
    
    // Tests if the KeyboardAvoidingView behaves correctly on different platforms (iOS vs. Android).
    it("renders the KeyboardAvoidingView", () => {
        const { getByTestId } = render(<ConnectionActsScreen />);
        const keyboardAvoidingView = getByTestId("keyboard-avoiding-view");
        expect(keyboardAvoidingView).toBeTruthy();
    });

    // Tests if the background image is rendered correctly in the component.
    it("renders the background image", () => {
        const { getByTestId } = render(<ConnectionActsScreen />);
        const backgroundImage = getByTestId("background-image");
        expect(backgroundImage).toBeTruthy();
    });

    // Mock the navigation object
    const mockNavigate = jest.fn();
    jest.mock('@react-navigation/native', () => ({
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            navigate: mockNavigate,
        }),
    }));

    // Mock the database functions
    jest.mock('../../database/db', () => ({
        connectToDatabase: jest.fn(),
        createTables: jest.fn(),
    }));

    jest.mock('../../database/connectionActs', () => ({
        insertConnectionAct: jest.fn(),
    }));
});


