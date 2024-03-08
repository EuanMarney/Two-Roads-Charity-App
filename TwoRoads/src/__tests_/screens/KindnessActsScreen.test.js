import React from "react";
import { render,fireEvent, waitFor} from "@testing-library/react-native";
import KindnessActsScreen from "../../screens/InputScreens/KindnessActsScreen";

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

describe("KindnessActsScreen", () => {
    // Test if the KindnessActsScreen component renders
    it("renders correctly", () => {
            const { getByTestId } = render(<KindnessActsScreen />);
            // Ensure that "kindness-acts-screen" testID exists in your component
            const kindnessActsScreen = getByTestId("kindness-acts-screen");
            expect(kindnessActsScreen).toBeTruthy();
    });

    // Tests if the text input fields for the first, second, and third kindness acts are rendered and accept input correctly.
    it("renders text input fields for the first, second, and third kindness acts", () => {
        const { getByPlaceholderText } = render(<KindnessActsScreen />);
        const firstKindAct = getByPlaceholderText("Describe the first act...");
        const secondKindAct = getByPlaceholderText("Describe the second act...");
        const thirdKindAct = getByPlaceholderText("Describe the third act...");

        expect(firstKindAct).toBeTruthy();
        expect(secondKindAct).toBeTruthy();
        expect(thirdKindAct).toBeTruthy();
    });

    // Tests if entering text in the kindness act input fields correctly updates component state.
    it("updates component state when text is entered in the input fields", () => {
        const { getByPlaceholderText } = render(<KindnessActsScreen />);
        const firstKindAct = getByPlaceholderText("Describe the first act...");
        const secondKindAct = getByPlaceholderText("Describe the second act...");
        const thirdKindAct = getByPlaceholderText("Describe the third act...");

        fireEvent.changeText(firstKindAct, "First Kindness Act");
        fireEvent.changeText(secondKindAct, "Second Kindness Act");
        fireEvent.changeText(thirdKindAct, "Third Kindness Act");

        expect(firstKindAct.props.value).toBe("First Kindness Act");
        expect(secondKindAct.props.value).toBe("Second Kindness Act");
        expect(thirdKindAct.props.value).toBe("Third Kindness Act");
    });
});