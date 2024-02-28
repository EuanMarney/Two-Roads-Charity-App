import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SubmitButton from "../../components/interactiveComps/SubmitButton";

describe("SubmitButton", () => {
    test("renders correctly", () => {
        const { getByText } = render(<SubmitButton title="Submit" onPress={() => {}} />);
        const buttonElement = getByText("Submit");
        expect(buttonElement).toBeTruthy();
    });

    test("calls onPress function when pressed", () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<SubmitButton title="Submit" onPress={onPressMock} />);
        const buttonElement = getByText("Submit");
        fireEvent.press(buttonElement);
        expect(onPressMock).toHaveBeenCalled();
    });
});
