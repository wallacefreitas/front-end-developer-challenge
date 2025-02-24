import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./index";

describe("Container Component", () => {
  it("renders Container component with children", () => {
    render(
      <Container>
        <div>Container Content</div>
      </Container>
    );
    const contentElement = screen.getByText(/Container Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("applies additional props to the Container component", () => {
    render(
      <Container data-testid="container">
        <div>Container Content</div>
      </Container>
    );
    const containerElement = screen.getByTestId("container");
    expect(containerElement).toBeInTheDocument();
  });
});
