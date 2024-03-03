"use client";
import React from "react";
import { QuestionOptionProps } from "@/utils/types";

/**
 * A question option component.
 * @param {Object} props - The properties of the question option.
 * @param {Function} props.handleAnswerClick - The function to be called when the option is clicked.
 * @param {Object} props.option - The option object containing information about the option.
 * @param {string} props.option.alphaKey - The alpha key of the option.
 * @param {string} props.option.value - The value or text content of the option.
 * @param {string} props.selectedAnswer - The value of the currently selected answer.
 * @returns {JSX.Element} The JSX element representing the question option.
 */

export default function QuestionOption({
  handleAnswerClick,
  option,
  selectedAnswer,
}: QuestionOptionProps) {
  return (
    <li
      data-testid="option-container"
      onClick={() => handleAnswerClick(option.value)}
      className={`rounded-lg py-4 px-2 hover:cursor-pointer hover:border-black hover:border-2 ${
        selectedAnswer === option.value && "border-black border-2"
      }`}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center rounded border-2 h-[40px] w-[40px] border-black">
          <p data-testid="alphaKey"> {option.alphaKey} </p>
        </div>

        <div className="ml-3">
          <p data-testid="optionValue">{option.value}</p>
        </div>
      </div>
    </li>
  );
}
