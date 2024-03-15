import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import TextBox from "../../components/interactiveComps/TextBox";

describe("TextBox", () => {
    test("renders correctly", () => {
        const { getByPlaceholderText } = render(
            <TextBox placeholder="Enter text" />
        );
        const inputElement = getByPlaceholderText("Enter text");
        expect(inputElement).toBeTruthy();
    });

    test("calls onChangeText when text is changed", () => {
        const onChangeText = jest.fn();
        const { getByPlaceholderText } = render(
            <TextBox placeholder="Enter text" onChangeText={onChangeText} />
        );
        const inputElement = getByPlaceholderText("Enter text");
        fireEvent.changeText(inputElement, "Hello");
        expect(onChangeText).toHaveBeenCalledWith("Hello");
    });

    test("displays the provided value", () => {
        const { getByDisplayValue } = render(
            <TextBox value="Hello" placeholder="Enter text" />
        );
        const inputElement = getByDisplayValue("Hello");
        expect(inputElement).toBeTruthy();
    });

});
