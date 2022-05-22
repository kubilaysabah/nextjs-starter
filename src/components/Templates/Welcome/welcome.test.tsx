// Testing Library
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

// Component
import Welcome from ".";

describe("Title", () => {
    it("Render the Title", () => {
        render(<Welcome />)

        const Title = screen.getAllByTitle("Welcome to the Next.JS");

        expect(Title)
    })
})