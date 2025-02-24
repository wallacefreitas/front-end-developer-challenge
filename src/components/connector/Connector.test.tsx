import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Connector } from "./index";

describe("Connector Components", () => {
  it("renders ConnectorRoot component", () => {
    render(
      <Connector.Root>
        <div>Connector Root Content</div>
      </Connector.Root>
    );
    const contentElement = screen.getByText(/Connector Root Content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
