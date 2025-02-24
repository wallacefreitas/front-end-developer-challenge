import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./index";
import "jest-styled-components";

describe("Label Component", () => {
  it("renders Label component with text", () => {
    render(<Label text="Label Content" />);
    const contentElement = screen.getByText(/Label Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("applies additional props to the Label component", () => {
    render(<Label text="Label Content" data-testid="label" />);
    const labelElement = screen.getByTestId("label");
    expect(labelElement).toBeInTheDocument();
  });
});
