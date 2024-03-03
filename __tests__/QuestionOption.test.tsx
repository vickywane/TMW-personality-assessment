import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import QuestionOption from "../components/QuestionOption";

const MOCK_OPTION = {
  alphaKey: "B",
  value: "Bubble with inner anger, but keep quiet",
};

describe("QuestionOption Component", () => {
  it("QuestionOption renders a clickable LI element", () => {
    const mockedhandleAnswerClickProp = jest.fn();

    render(
      <QuestionOption
        handleAnswerClick={mockedhandleAnswerClickProp}
        option={MOCK_OPTION}
        selectedAnswer={"Bubble with inner anger, but keep quiet"}
      />
    );

    const optionElememt = screen.getByRole('listitem');
    optionElememt.click();

    expect(mockedhandleAnswerClickProp).toHaveBeenCalled();
  });

  it("Renders an alphaKey and option characters", () => {
    render(
      <QuestionOption
        handleAnswerClick={jest.fn()}
        option={MOCK_OPTION}
        selectedAnswer={"Bubble with inner anger, but keep quiet"}
      />
    );

    const optionAlphaKeyElememt = screen.getByTestId("alphaKey");
    const optionValueElememt = screen.getByTestId("optionValue");

    expect(optionAlphaKeyElememt).toBeInTheDocument();

    expect(optionValueElememt).toBeInTheDocument();
    expect(optionValueElememt.textContent).toBe(MOCK_OPTION.value);
  });
});
