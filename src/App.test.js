import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React from "react";
import App from "./App";

jest.mock("axios");

// https://www.robinwieruch.de/react-testing-library
describe("App", () => {
    test("fetches stories from an API and displays them", async () => {
        // Given
        const stories = [
            { objectID: "1", title: "Hello" },
            { objectID: "2", title: "React" },
        ];

        const promise = Promise.resolve({ data: { hits: stories } });

        axios.get.mockImplementationOnce(() => promise);

        // When
        render(<App />);
        await userEvent.click(screen.getByRole("button"));
        await act(() => promise);

        // Then
        expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });

    test("fetches stories from an API and fails", async () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

        render(<App />);

        await userEvent.click(screen.getByRole("button"));

        const message = await screen.findByText(/Something went wrong/);

        expect(message).toBeInTheDocument();
    });
});
