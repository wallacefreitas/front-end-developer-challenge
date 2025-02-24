import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Board } from "./index";

describe("Board Components", () => {
  it("renders BoardRoot component", () => {
    render(
      <Board.Root>
        <div>Board Root Content</div>
      </Board.Root>
    );
    const contentElement = screen.getByText(/Board Root Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders BoardHeader component", () => {
    render(<Board.Header />);
    const headerElement = screen.getByText(/TITANSTAR LEGENDS RUNE MASTERY/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders BoardBody component", () => {
    render(
      <Board.Body>
        <div>Board Body Content</div>
      </Board.Body>
    );
    const contentElement = screen.getByText(/Board Body Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
