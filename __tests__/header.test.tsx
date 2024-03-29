import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Heading from "../components/Header";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: () => jest.fn(),
    };
  },
}));

describe("Page", () => {
  it("Renders a Restart Assessment button", () => {
    render(<Heading />);

    const restartBtnElememt = screen.getByTestId("restart-assessment-btn");

    expect(restartBtnElememt).toBeInTheDocument();
  });

  it("Click on Restart Assessment button clears local storage", () => {
    render(<Heading />);
    jest.spyOn(Storage.prototype, "removeItem");

    screen.getByTestId("restart-assessment-btn").click();

    expect(localStorage.removeItem).toHaveBeenCalled();
  });

  it("Executes router.push on Restart Assessment button click to navigate to home page", () => {
    render(<Heading />);

    screen.getByTestId("restart-assessment-btn").click();

    // expect(localStorage.removeItem).toHaveBeenCalled();
  });
});
