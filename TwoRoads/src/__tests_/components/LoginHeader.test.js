import { render } from "@testing-library/react-native";
import React from "react";

import LoginHeader from "../../components/Header/LoginHeader";

describe("LoginHeader", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<LoginHeader />);
        const loginHeader = getByTestId("login-header");

        expect(loginHeader).toBeDefined();
    });
});
