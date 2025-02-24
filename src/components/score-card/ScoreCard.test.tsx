import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ScoreCard } from "./index";

describe("ScoreCard Components", () => {
  it("renders ScoreCardRoot component", () => {
    render(
      <ScoreCard.Root>
        <div>ScoreCard Root Content</div>
      </ScoreCard.Root>
    );
    const contentElement = screen.getByText(/ScoreCard Root Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders ScoreCardContent component", () => {
    render(
      <ScoreCard.Content>
        <div>ScoreCard Content</div>
      </ScoreCard.Content>
    );
    const contentElement = screen.getByText(/ScoreCard Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
