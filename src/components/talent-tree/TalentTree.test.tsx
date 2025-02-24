import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TalentTree } from "./index";

describe("TalentTree Components", () => {
  it("renders TalentTreeRoot component", () => {
    render(
      <TalentTree.Root>
        <div>TalentTree Root Content</div>
      </TalentTree.Root>
    );
    const contentElement = screen.getByText(/TalentTree Root Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders TalentTreeGroup component", () => {
    render(
      <TalentTree.Group>
        <div>TalentTree Group Content</div>
      </TalentTree.Group>
    );
    const contentElement = screen.getByText(/TalentTree Group Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders TalentTreePath component", () => {
    render(
      <TalentTree.Path>
        <div>TalentTree Path Content</div>
      </TalentTree.Path>
    );
    const contentElement = screen.getByText(/TalentTree Path Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  it("renders TalentTreeImage component", () => {
    render(
      <TalentTree.Image
        src="../../src/assets/images/boat.png"
        alt="TalentTree Image"
        borderColor="blue"
        brightness={100}
        handleClick={() => {}}
        handleTouchStart={() => {}}
        handleTouchEnd={() => {}}
      />
    );
    const imageElement = screen.getByAltText(/TalentTree Image/i);
    expect(imageElement).toBeInTheDocument();
  });
});
