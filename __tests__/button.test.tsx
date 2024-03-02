import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Page", () => {
  it("Renders a button with title, styleClass, onClick, disabled props", () => {
    render(
      <Button
        testId="test-id"
        title="Test Button"
        onClick={() => {}}
        styleClass=""
      />
    );

    const btnElememt = screen.getByTestId("test-id");

    expect(btnElememt).toBeInTheDocument();
  });

  it("Button is hidden with truthy hidden prop", () => {
    render(
      <Button
        testId="test-id"
        title="Test Button"
        onClick={() => {}}
        styleClass=""
        hidden={true}
      />
    );

    const btnElememt = screen.getByTestId("test-id");

    expect(btnElememt).toBeNull()
  });
});
