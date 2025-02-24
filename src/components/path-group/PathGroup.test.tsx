import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { PathGroup } from "./index";

describe("PathGroup Components", () => {
  it("renders PathGroupRoot component", () => {
    render(
      <PathGroup.Root>
        <div>PathGroup Root Content</div>
      </PathGroup.Root>
    );
    const contentElement = screen.getByText(/PathGroup Root Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders PathGroupSection component", () => {
    render(
      <PathGroup.Section>
        <div>PathGroup Section Content</div>
      </PathGroup.Section>
    );
    const contentElement = screen.getByText(/PathGroup Section Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders PathGroupSectionItem component", () => {
    render(
      <PathGroup.SectionItem>
        <div>PathGroup Section Item Content</div>
      </PathGroup.SectionItem>
    );
    const contentElement = screen.getByText(/PathGroup Section Item Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
