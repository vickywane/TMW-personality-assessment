import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  it("Renders a button with title, styleClass, onClick, disabled props", () => {
    render(
      <Button
        testId="test-id"
        title="Test Button"
        onClick={() => {}}
        styleClass=""
      />
    );

    const btnElememt = screen.getByRole('button', { name: "Test Button" });
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

    const btnElememt = screen.queryByText("test-id");
    expect(btnElememt).toBeNull()
  });

  it("onClick prop is executed when button is clicked", () => {
    const mockedhandleAnswerClickProp = jest.fn();

    render(
      <Button
        testId="test-id"
        title="Test Button"
        onClick={mockedhandleAnswerClickProp}
        styleClass=""
      />
    );

    const btnElememt = screen.getByTestId("test-id");
    btnElememt.click()

    expect(mockedhandleAnswerClickProp).toHaveBeenCalled();
  });
});
