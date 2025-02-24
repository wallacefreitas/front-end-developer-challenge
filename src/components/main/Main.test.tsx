import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Main } from "./index";

describe("Main Component", () => {
  it("renders Main component with children", () => {
    render(
      <Main>
        <div>Main Content</div>
      </Main>
    );
    const contentElement = screen.getByText(/Main Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("applies additional props to the Main component", () => {
    render(
      <Main data-testid="main">
        <div>Main Content</div>
      </Main>
    );
    const mainElement = screen.getByTestId("main");
    expect(mainElement).toBeInTheDocument();
  });
});
